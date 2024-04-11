import React from "react";
import { useState } from "react";
import styles from "../scss/HomePage.module.scss";

import Post from "../Components/Post";
import { UpcomingEventContainerFalse } from "../Components/HomePageComponents/UpcomingEventContainer";
import { FriendSuggestionContainerFalse } from "../Components/HomePageComponents/FriendSuggestionContainer";

export default function HomePageGuest() {
  return (
    <div className={styles.container}>
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
  );
}
