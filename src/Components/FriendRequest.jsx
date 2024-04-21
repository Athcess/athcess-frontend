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
import { getFriendRequest } from "../Services/HomeAPI";
import { useQuery } from "@tanstack/react-query";

export default function FriendRequest() {
  const query = useQuery({
    queryKey: ["firendrequest"],
    queryFn: getFriendRequest,
  });

  if (query.status === "success") {
    const posts = query.data.data;
    console.log(posts);

    return (
      <div className={styles.rightcontainer}>
        <Text className={styles.text} fw={700}>
          Friend Requests
        </Text>
        <div className={styles.content}>
          <Stack className={styles.box}>
            {posts?.map((e) => {
              return (
                <div key={e.id} className={styles.list}>
                  <div className={styles.profileLeft}>
                    <UnstyledButton>
                      <Image
                        src="/Images/profile_logo.jpeg"
                        className={styles.profileImage}
                      />
                    </UnstyledButton>
                    <div className={styles.profileContent}>
                      <div className={styles.profileName}>{e.username}</div>
                    </div>
                    <Group className={styles.editPost}>
                      <Button color="#00A67E">Accept</Button>
                      <Button color="#BBBBBB">Decline</Button>
                    </Group>
                  </div>
                </div>
              );
            })}
          </Stack>
        </div>
      </div>
    );
  }
}
