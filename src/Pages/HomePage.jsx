import React from "react";
import { useState } from "react";
import styles from "../scss/HomePage.module.scss";
import {
  Box,
  Grid,
  UnstyledButton,
  Image,
  Spoiler,
  TextInput,
  Button,
  ActionIcon,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

import Post from "../Components/HomePageComponents/Post";
import {
  UpcomingEventContainerTrue,
  UpcomingEventContainerFalse,
} from "../Components/HomePageComponents/UpcomingEventContainer";
import {
  FriendSuggestionContainerTrue,
  FriendSuggestionContainerFalse,
} from "../Components/HomePageComponents/FriendSuggestionContainer";

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        {isLogin ? (
          <UpcomingEventContainerTrue></UpcomingEventContainerTrue>
        ) : (
          <UpcomingEventContainerFalse></UpcomingEventContainerFalse>
        )}
        {isLogin ? (
          <FriendSuggestionContainerTrue></FriendSuggestionContainerTrue>
        ) : (
          <FriendSuggestionContainerFalse></FriendSuggestionContainerFalse>
        )}

        <ActionIcon
          size="50px"
          variant="filled"
          aria-label="Settings"
          radius="xl"
          className={styles.newPost}
        >
          <IconPlus stroke={2} size="50px" />
        </ActionIcon>
      </div>
      <div className={styles.rightContent}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  );
}
