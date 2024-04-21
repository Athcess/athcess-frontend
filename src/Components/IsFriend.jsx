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
import {
  getFriendRequest,
  getisFriend,
  postAcceptFriend,
  postaddFriend,
  postRejectFriend,
} from "../Services/HomeAPI";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";

export default function IsFriend({ user, id }) {
  const auth_username = Cookies.get("auth_username");
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["isfriend", user],
    queryFn: () => getisFriend(user),
  });

  const mutation = useMutation({
    mutationFn: postaddFriend,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["isfriend"] });
      queryClient.invalidateQueries({ queryKey: ["friendrequest"] });
      queryClient.invalidateQueries({ queryKey: ["friendlist"] });
      console.log(data);
    },
  });
  const add = (e) => {
    mutation.mutate(e);
  };

  if (query.status === "success") {
    const posts = query.data.data;
    console.log(posts);
    if(user == auth_username){
        return(<></>)
    }
    else if (posts.length == 0) {
      return (
        <Button color="#00A67E" w={200} onClick={() => add(user)}>
          SEND FRIEND REQUEST
        </Button>
      );
    } else if (posts[0].status == "accepted") {
      return (
        <Button disabled color="#00A67E" w={200} onClick={() => add(user)}>
          ADDED
        </Button>
      );
    } else if (posts[0].status == "pending") {
      return (
        <Button disabled color="#00A67E" w={200} onClick={() => add(user)}>
          REQUEST SENT
        </Button>
      );
    }
  }
}
