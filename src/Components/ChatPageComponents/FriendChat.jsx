import React from "react";
import { Image, Button } from "@mantine/core";
import styles from "../../scss/ChatPageComponents/FriendChat.module.scss";

export default function FriendChat() {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src="/Images/profile_logo.jpeg"></Image>
      <div className={styles.content}>
        <div className={styles.name}>วี่หว่อง หว่องวี่</div>
        <div className={styles.mutual}>You: lets gooooo!!! ho... 16h </div>
      </div>
    </div>
  );
}
