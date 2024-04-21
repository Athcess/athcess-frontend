import React from "react";
import { Image, UnstyledButton, Spoiler } from "@mantine/core";
import styles from "../../scss/HomePageComponents/Comment.module.scss";
import { useQuery } from "@tanstack/react-query";
import { profileAthlete } from "../../Services/ProfileAPI";
import { Loader } from "@mantine/core";
export default function Comment({ comment }) {
  const getUser = useQuery({
    queryKey: ["getuser", comment.username],
    queryFn: () => profileAthlete(comment.username),
  });
  console.log(getUser.data);
  if (getUser.isLoading) {
    return <Loader color="teal"></Loader>;
  }
  if (getUser.data) {
    return (
      <div className={styles.container}>
        <UnstyledButton>
          <Image src="/Images/profile_logo.jpeg" className={styles.image} />
        </UnstyledButton>
        <div className={styles.content}>
          <div className={styles.name}>{getUser.data.data.username}</div>
          <Spoiler
            showLabel="Show more"
            hideLabel="Hide"
            maxHeight={125}
            padding={20}
            className={styles.comment}>
            {comment.description}
          </Spoiler>
        </div>
      </div>
    );
  }
}
