import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../scss/PostPage.module.scss";
import {
  Image,
  UnstyledButton,
  Spoiler,
  TextInput,
  Divider,
  Button,
} from "@mantine/core";
import PostInteraction from "../Components/HomePageComponents/PostInteraction";
import Comment from "../Components/HomePageComponents/Comment";
import { useQuery } from "@tanstack/react-query";
import { getBlobPost, getPost } from "../Services/HomeAPI";
import dayjs from "dayjs";

export default function PostPage() {
  let { postid } = useParams();
  var content;
  var postdata;
  const queryblob = useQuery({
    queryKey: ["getpostpage", postid],
    queryFn: () => getBlobPost(postid),
  });
  if (queryblob.status === "success") {
    content = queryblob.data;
    console.log(content.length);
  }
  const querypost = useQuery({
    queryKey: ["post", postid],
    queryFn: () => getPost(postid),
  });
  if (querypost.status === "success") {
    console.log(querypost.data.data);
    postdata = querypost.data.data
  
    return (
      <div className={styles.container}>
        {queryblob.status === "success" &&
          content.length === 1 &&
          content[0].content_type.startsWith("image/") && (
            <Image className={styles.postImage} src={content[0].url}></Image>
          )}
        {queryblob.status === "success" &&
          content.length === 1 &&
          content[0].content_type.startsWith("video/") && (
            <video className={styles.postVideo} controls>
              <source src={content[0].url} type={content[0].content_type} />
              Your browser does not support the video tag.
            </video>
          )}
        <Button
          href={"javascript: history.go(-1)"}
          component="a"
          className={styles.Button}
        >
          x
        </Button>
        <div className={styles.content}>
          <div className={styles.profile}>
            <div className={styles.profileLeft}>
              <UnstyledButton>
                <Image
                  src="/Images/profile_logo.jpeg"
                  className={styles.profileImage}
                />
              </UnstyledButton>
              <div className={styles.profileContent}>
                <div className={styles.profileName}>{postdata.username}</div>
                <div className={styles.profileDate}>{dayjs(postdata.created_at).format("DD/MM/YYYY h:mm a")}{" "}
                </div>
              </div>
            </div>
            <UnstyledButton className={styles.editPost}>
              <Image src="/Images/ProfilePage/editPost_logo.png"></Image>
            </UnstyledButton>
          </div>
          <Spoiler
            showLabel="Show more"
            hideLabel="Hide"
            maxHeight={125}
            padding={20}
            className={styles.text}
          >
           {postdata.description}
          </Spoiler>
          <Divider className={styles.divider} size={3}></Divider>
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
      </div>
    );
  }
}
