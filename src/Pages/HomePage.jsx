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
import Event from "../Components/Event";

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true);
  const query = useQuery({ queryKey: ["postfeed"], queryFn: getFeed });
  var feeds = [];
  if (query.status === "success") {
    feeds = query.data;
    console.log(feeds);
    feeds.sort((a, b) => dayjs(b.created_at) - dayjs(a.created_at));
  }
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        {isLogin ? (
          <UpcomingEventContainerTrue></UpcomingEventContainerTrue>
        ) : (
          <UpcomingEventContainerFalse></UpcomingEventContainerFalse>
        )}
        {/* {isLogin ? (
          <FriendSuggestionContainerTrue></FriendSuggestionContainerTrue>
        ) : (
          <FriendSuggestionContainerFalse></FriendSuggestionContainerFalse>
        )} */}
      </div>
      {query.status === "success" && (
        <div className={styles.rightContent}>
          {feeds?.map((e) => {
            if (typeof e.post_id != "undefined") {
              return <Post key={feeds.indexOf(e)} adata={e}></Post>;
            }
            if (typeof e.event_id != "undefined") {
              return <Event key={feeds.indexOf(e)} adata={e}></Event>;
            }
          })}
        </div>
      )}
    </div>
  );
}
