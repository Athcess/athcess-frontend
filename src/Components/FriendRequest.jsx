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
import { getFriendRequest, postAcceptFriend, postRejectFriend } from "../Services/HomeAPI";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function FriendRequest() {
  const navigate = useNavigate();
  const gotoAthleteProfile = (e) => {
    navigate("/athleteprofile/" + e);
  };
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["friendrequest"],
    queryFn: getFriendRequest,
  });

  const acceptedmutation = useMutation({
    mutationFn: postAcceptFriend,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["friendrequest"] });
        queryClient.invalidateQueries({ queryKey: ["friendlist"] });
      console.log(data);
    },
  });
  const accept = (e) => {
   acceptedmutation.mutate(e);
  };

  const rejectmutation = useMutation({
    mutationFn: postRejectFriend,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["friendrequest"] });
      queryClient.invalidateQueries({ queryKey: ["friendlist"] });
      console.log(data);
    },
  });
  const reject = (e) => {
   rejectmutation.mutate(e);
  };


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
                    <UnstyledButton
                    onClick={(event) => gotoAthleteProfile(e.username)}
                     >
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
                    <Group className={styles.editPost}>
                      <Button color="#00A67E" onClick={()=> accept(e.id)}>Accept</Button>
                      <Button color="#BBBBBB" onClick={()=> reject(e.id)}>Decline</Button>
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
