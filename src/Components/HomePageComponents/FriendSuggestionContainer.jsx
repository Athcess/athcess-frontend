import React from "react";
import { Image, Button } from "@mantine/core";
import styles from "../../scss/HomePageComponents/FriendSuggestionContainer.module.scss";
import FriendSuggestion from "./FriendSuggestion";

export function FriendSuggestionContainerTrue() {
  return (
    <div className={styles.true}>
      <div className={styles.title}>People you may know</div>
      <div className={styles.content}>
        <FriendSuggestion></FriendSuggestion>
        <FriendSuggestion></FriendSuggestion>
        <FriendSuggestion></FriendSuggestion>
        <FriendSuggestion></FriendSuggestion>
      </div>
    </div>
  );
}
export function FriendSuggestionContainerFalse() {
  return (
    <div className={styles.false}>
      <Image src="/Images/lock_logo.png" className={styles.lock}></Image>
      <div className={styles.header}>Sign in to unlock this feature</div>
      <div style={{ width: 220 }}>
        <Button
          fullWidth
          variant="filled"
          color="#007458"
          size="md"
          radius="xl"
          component="a"
          href="/signin"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}
