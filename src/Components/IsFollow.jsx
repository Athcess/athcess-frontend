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
    getFollow,
  getFriendRequest,
  getisFriend,
  postAcceptFriend,
  postaddFriend,
  postFollow,
  postRejectFriend,
} from "../Services/HomeAPI";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";

export default function IsFollow({ user, id }) {
  const auth_username = Cookies.get("auth_username");
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["isfollow"],
    queryFn: getFollow,
  });

  const mutation = useMutation({
    mutationFn: postFollow,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["isfriend"] });
      queryClient.invalidateQueries({ queryKey: ["isfollow"] });
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
    else if (posts.following.length == 0) {
      return (
        <Button color="#00A67E" w={200} onClick={() => add(user)}>
          FOLLOW
        </Button>
      );
    } else if (posts.following.includes(user)) {
      return (
        <Button  color="#DDDDDD" w={200} onClick={() => add(user)}>
          UNFOLLOW
        </Button>
      );
    }else if (!posts.following.includes(user)) {
        return (
          <Button color="#00A67E" w={200} onClick={() => add(user)}>
            FOLLOW
          </Button>
        );
      } 
  }
}
