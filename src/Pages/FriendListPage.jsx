import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { getFriend } from "../Services/HomeAPI";
import { useQuery } from "@tanstack/react-query";

export default function FriendListPage() {
  const navigate = useNavigate();
  const gotoAthleteProfile = (e) => {
    navigate("/athleteprofile/" + e);
  };

  const query = useQuery({
    queryKey: ["friendlist"],
    queryFn: getFriend,
  });

  if (query.status === "success") {
    const posts = query.data.data;
    console.log(posts);

  return (
    <div className={styles.container}>
      <div className={styles.leftcontainer}>
        <Text className={styles.title} fw={700}>
          Friends ({posts.length})
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
        {posts?.map((e) => {
          return (<>
          <Divider size={3}></Divider>
          <div className={styles.profileLeft}>
            <UnstyledButton
            onClick={(event) => gotoAthleteProfile(e.username)}>
              <Image
                src={
                  e.url == null ? "/Images/defualt_profile.png" : e.url
                }
                className={styles.profileImage}
              />
            </UnstyledButton>
            <div className={styles.profileContent}>
              <div className={styles.profileName}>{e.username}</div>
            </div>
          </div>
          </>
          )})}
        </Stack>
      </div>

      <Divider size={3} orientation="vertical"></Divider>

      <FriendRequest></FriendRequest>
       
    </div>
  );
}
}