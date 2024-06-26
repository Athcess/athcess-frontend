import React from "react";
import {
  Image,
  UnstyledButton,
  Spoiler,
  TextInput,
  NavLink,
  Modal,
  Textarea,
  Text,
  Group,
  rem,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import PostInteraction from "./HomePageComponents/PostInteraction";
import { UEvent } from "./Status";
import Comment from "./HomePageComponents/Comment";
import styles from "../scss/Post.module.scss";
import { useNavigate } from "react-router-dom";
import { Component } from "react";
import dayjs from "dayjs";
import {
  del_post,
  getBlobPost,
  getComment,
  postComment,
} from "../Services/HomeAPI";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "@mantine/form";
import Cookies from "js-cookie";
import { profileAthlete } from "../Services/ProfileAPI";

export default function Post({ adata }) {
  const form = useForm({
    initialValues: {
      post_id: adata.post_id,
      commentValue: "",
    },
  });

  const navigate = useNavigate();
  const proquery = useQuery({
    queryKey: ["goprofile", adata.username],
    queryFn: () => profileAthlete(adata.username),
  });

  const commentData = useQuery({
    queryKey: ["getcomment"],
    queryFn: () => getComment(adata.post_id),
  });
  const gotoProfile = () => {
    queryClient.invalidateQueries({ queryKey: ["goprofile", adata.username] });
    const roles = proquery.data.data.role;
    console.log(roles);
    if (roles === "athlete") {
      navigate("/athleteprofile/" + adata.username);
    } else if (roles === "scout") {
      navigate("/scoutprofile/" + adata.username);
    }
  };

  const [opened, { open, close }] = useDisclosure(false);
  const auth_username = Cookies.get("auth_username");
  const queryClient = useQueryClient();
  var content;
  const postid = adata.post_id;
  const query = useQuery({
    queryKey: ["getpost", adata.post_id],
    queryFn: () => getBlobPost(adata.post_id),
  });
  if (query.status === "success") {
    content = query.data;
  }

  const delmutation = useMutation({
    mutationFn: del_post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postprofile"] });
      queryClient.invalidateQueries({ queryKey: ["postfeed"] });
    },
  });
  const mutationPost = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      commentData.refetch();
    },
  });
  const delPost = (e) => {
    e.preventDefault();
    delmutation.mutate(adata.post_id);
    close();
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    form.setFieldValue("commentValue", "");
    mutationPost.mutate(form.values);
    console.log(form.values);
  };
  console.log(commentData.data);
  return (
    <div className={styles.container}>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        size="md"
        radius={30}
        padding={30}
        classNames={{ content: styles.modal }}
        zIndex={1000}>
        <Group justify="space-evenly">
          <Button w={150} size="lg" color="#00A67E" onClick={close}>
            BACK
          </Button>
          <Button w={150} size="lg" color="red" onClick={delPost}>
            DELETE
          </Button>
        </Group>
      </Modal>
      <div className={styles.profile}>
        <div className={styles.profileLeft}>
          <UnstyledButton onClick={(event) => gotoProfile()}>
            <Image
              src={
                adata.url == null ? "/Images/defualt_profile.png" : adata.url
              }
              className={styles.profileImage}
            />
          </UnstyledButton>
          <div className={styles.profileContent}>
            <div className={styles.profileName}>{adata.username}</div>
            <div className={styles.profileDate}>
              {dayjs(adata.created_at).format("DD/MM/YYYY h:mm a")}{" "}
            </div>
          </div>
        </div>
        {adata.username === auth_username && (
          <UnstyledButton className={styles.deletePost} onClick={open}>
            <Image src="/Images/ProfilePage/Bin.png"></Image>
          </UnstyledButton>
        )}
      </div>
      <UnstyledButton href={"/post/" + postid} component="a">
        <Spoiler
          showLabel="Show more"
          hideLabel="Hide"
          maxHeight={125}
          padding={20}
          className={styles.text}>
          {adata.description}
        </Spoiler>
      </UnstyledButton>

      {query.status === "success" &&
        content.length === 1 &&
        content[0].content_type.startsWith("image/") && (
          <Image className={styles.postImage} src={content[0].url}></Image>
        )}
      {query.status === "success" &&
        content.length === 1 &&
        content[0].content_type.startsWith("video/") && (
          <video className={styles.postVideo} controls>
            <source src={content[0].url} type={content[0].content_type} />
            Your browser does not support the video tag.
          </video>
        )}

      <PostInteraction adata={adata}></PostInteraction>
      <div className={styles.commentContainer}>
        {commentData.data ? (
          commentData.data.map((commentElement) => {
            return (
              <Comment
                key={commentElement.created_at}
                comment={commentElement}></Comment>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <form onSubmit={handlePostComment}>
        <TextInput
          className={styles.commentInput}
          placeholder="Add Comment"
          radius={"30px"}
          color="#eeeeee"
          value={form.values.commentValue}
          onChange={(event) =>
            form.setFieldValue("commentValue", event.target.value)
          }
        />
      </form>
    </div>
  );
}
