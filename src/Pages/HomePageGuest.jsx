import React from "react";
import { useState } from "react";
import styles from "../scss/HomeGuest.module.scss";

import Post from "../Components/Post";
import { UpcomingEventContainerFalse } from "../Components/HomePageComponents/UpcomingEventContainer";
import { FriendSuggestionContainerFalse } from "../Components/HomePageComponents/FriendSuggestionContainer";
import { Button } from "@mantine/core";

export default function HomePageGuest() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerText}>ATHCESS</div>
        <Button
        className={styles.button}
          w={200}
          variant="filled"
          color="#FFFFFF"
          size="md"
          radius="xl"
          component="a"
          href="/signin"
        >
          Sign in
        </Button>
      </header>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <UpcomingEventContainerFalse></UpcomingEventContainerFalse>
          <FriendSuggestionContainerFalse></FriendSuggestionContainerFalse>
        </div>
        <div className={styles.rightContent}>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
      </div>
    </div>
  );
}
