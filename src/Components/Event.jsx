import React from "react";
import {
  Image,
  UnstyledButton,
  Spoiler,
  TextInput,
  NavLink,
  Modal,
  Textarea,
  Group,
  Button
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import PostInteraction from "./HomePageComponents/PostInteraction";
import { UEvent } from "./Status";
import Comment from "./HomePageComponents/Comment";
import styles from "../scss/Post.module.scss";
import { useNavigate } from "react-router-dom";
import { Component } from "react";
import Cookies from "js-cookie";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { del_event, del_post, getBlobEvent, getBlobPost } from "../Services/HomeAPI";
import dayjs from "dayjs";


export default function Event({adata}) {
  const [opened, { open, close }] = useDisclosure(false);
  const orgname = Cookies.get("orgname");
  const queryClient = useQueryClient();
  var content;
  const event_id = adata.event_id;
  const query = useQuery({
    queryKey: ["getEvent", adata.event_id],
    queryFn: () => getBlobEvent(adata.event_id),
  });
  if (query.status === "success") {
    content = query.data;
  }

  const delmutation = useMutation({
    mutationFn: del_event,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getevent"] });
      queryClient.invalidateQueries({ queryKey: ["postfeed"] });
    },
  });

  const delEvent = (e) => {
    e.preventDefault();
    delmutation.mutate(adata.event_id);
    close();
  };
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
        zIndex={1000}
      >
        <Group justify="space-evenly">
          <Button w={150} size="lg" color="#00A67E" onClick={close}>
            BACK
          </Button>
          <Button w={150} size="lg" color="red" onClick={delEvent}>
            DELETE
          </Button>
        </Group>
      </Modal>
      <div className={styles.profile}>
        <div className={styles.profileLeft}>
          <UnstyledButton>
            <Image
              src="/Images/profile_logo.jpeg"
              className={styles.profileImage}
            />
          </UnstyledButton>
          <div className={styles.profileContent}>
            <div className={styles.profileName}>
            {adata.club} <UEvent></UEvent>
            </div>

            <div className={styles.profileDate}>{dayjs(adata.created_at).format("DD/MM/YYYY h:mm a")}</div>
          </div>
        </div>
        {adata.club === orgname && (
          <UnstyledButton className={styles.deletePost} onClick={open}>
            <Image src="/Images/ProfilePage/Bin.png"></Image>
          </UnstyledButton>
        )}
      </div>
      
        <Spoiler
          showLabel="Show more"
          hideLabel="Hide"
          maxHeight={125}
          padding={20}
          className={styles.text}>
          Start at: {dayjs(adata.start_time).format("DD/MM/YYYY h:mm a")} <br></br>
          End at: {dayjs(adata.end_time).format("DD/MM/YYYY h:mm a")} <br></br>
          {adata.description}
        </Spoiler>
   
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
      <PostInteraction></PostInteraction>
      <div className={styles.commentContainer}>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
        <TextInput
          className={styles.commentInput}
          placeholder="Add Comment"
          radius={"30px"}
          color="#eeeeee"
        />
      </div>
    </div>
  );
}
