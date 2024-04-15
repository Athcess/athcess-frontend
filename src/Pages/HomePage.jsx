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

import Post from "../Components/Post";
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
      </div>
      <div className={styles.rightContent}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  );
}
