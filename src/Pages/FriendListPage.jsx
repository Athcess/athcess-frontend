import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../scss/FriendListPage.module.scss";
import {
  Image,
  UnstyledButton,
  Spoiler,
  TextInput,
  Divider,
  Button,
  Stack,
  Text,
  rem,
  Group,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import FriendRequest from "../Components/FriendRequest";

export default function FriendListPage() {

  
  return (
    <div className={styles.container}>
      <div className={styles.leftcontainer}>
        <Text className={styles.title} fw={700}>
          Friends (2)
        </Text>
        <TextInput
          className={styles.search}
          placeholder="Search"
          radius="20px"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          visibleFrom="xs"
        />
        <Stack className={styles.profile}>
          <Divider size={3}></Divider>
          <div className={styles.profileLeft}>
            <UnstyledButton>
              <Image
                src="/Images/profile_logo.jpeg"
                className={styles.profileImage}
              />
            </UnstyledButton>
            <div className={styles.profileContent}>
              <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
            </div>
          </div>
          <Divider size={3}></Divider>
          <div className={styles.profileLeft}>
            <UnstyledButton>
              <Image
                src="/Images/profile_logo.jpeg"
                className={styles.profileImage}
              />
            </UnstyledButton>
            <div className={styles.profileContent}>
              <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
            </div>
          </div>
        </Stack>
      </div>

      <Divider size={3} orientation="vertical"></Divider>

      <FriendRequest></FriendRequest>
       
    </div>
  );
}
