import React from "react";
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
import FriendSuggestion from "../Components/HomePageComponents/FriendSuggestion";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.upcomingEvent}>
          <div className={styles.upcomingEventTitle}>Upcoming Events!</div>
          <div className={styles.upcomingEventContent}>
            <ul className={styles.events}>
              <li>dsadsadsadsadsadsd</li>
              <li>dsadasdsdsdadad</li>
              <li>dsadasdsadasdsadadsadsadsadasdsa</li>
              <li>dsadssadadsadasdsadasdasdasdsa</li>
              <li>ddsdssdsdwqdssadaas</li>
            </ul>
            <UnstyledButton className={styles.calendar}>
              <Image src="/Images/calendar_color_logo.png" />
            </UnstyledButton>
          </div>
        </div>
        <div className={styles.friendSuggestion}>
          <div className={styles.friendSuggestionTitle}>
            People you may know
          </div>

          <div className={styles.friendSuggestionList}>
            <FriendSuggestion></FriendSuggestion>
            <FriendSuggestion></FriendSuggestion>
            <FriendSuggestion></FriendSuggestion>
            <FriendSuggestion></FriendSuggestion>
          </div>
        </div>

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
      </div>
    </div>
  );
}
