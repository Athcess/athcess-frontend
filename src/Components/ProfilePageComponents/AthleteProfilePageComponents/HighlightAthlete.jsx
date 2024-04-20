import React from "react";
import { NavLink } from "react-router-dom";
import { UnstyledButton } from "@mantine/core";
import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/PostAthlete.module.scss";
import Post from "../../Post";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { getHighlight } from "../../../Services/ProfileAPI";
export default function PostAthlete() {
  const query = useQuery({ queryKey: ["highlight"], queryFn: getHighlight });
  if (query.status === "success"){
    const posts = query.data.data
    console.log(posts)
    posts.sort((a, b) => dayjs(b.created_at) - dayjs(a.created_at));
    
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavLink className={styles.link} to="/athleteprofile">
          <UnstyledButton>About</UnstyledButton>
        </NavLink>
        <NavLink className={styles.link} to="/athleteprofile/post">
          <UnstyledButton>Post</UnstyledButton>
        </NavLink>
        <NavLink className={styles.link} to="/athleteprofile/highlight">
          <UnstyledButton>Highlight</UnstyledButton>
        </NavLink>
      </div>
      <div className={styles.content}>
      {posts?.map((e)=> {
        return <Post key={e.post_id} adata={e}></Post>
      })}
      </div>
    </div>
  );
}
  }