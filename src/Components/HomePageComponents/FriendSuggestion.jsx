import React from "react";
import { Image, Button } from "@mantine/core";
import styles from "../../scss/HomePageComponents/FriendSuggestion.module.scss";
export default function FriendSuggestion() {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src="/Images/profile_logo.jpeg"></Image>
      <div className={styles.content}>
        <div className={styles.name}>วี่หว่อง หว่องวี่</div>
        <div className={styles.mutual}>2 mutual friends</div>
        <div className={styles.buttonContainer}>
          <div style={{ width: 110 }}>
            <Button
              fullWidth
              variant="filled"
              color="green"
              radius="xl"
              component="a">
              Add friend
            </Button>
          </div>
          <div style={{ width: 110 }}>
            <Button
              fullWidth
              variant="filled"
              color="grey"
              radius="xl"
              component="a">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
