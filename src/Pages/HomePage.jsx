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
import { useQuery } from "@tanstack/react-query";
import { getFeed } from "../Services/HomeAPI";
import dayjs from "dayjs";



export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true);
  const query = useQuery({ queryKey: ["postfeed"], queryFn: getFeed});
  var posts = []
  if (query.status === "success"){
    posts = query.data.data
    console.log(posts)
    posts.sort((a, b) => dayjs(b.created_at) - dayjs(a.created_at));
  }
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
      {query.status === "success" && (
      <div className={styles.rightContent}>
        {posts?.map((e)=> {
        return <Post key={e.post_id} adata={e}></Post>
      })}
      </div>
      )}
    </div>
  );
}
