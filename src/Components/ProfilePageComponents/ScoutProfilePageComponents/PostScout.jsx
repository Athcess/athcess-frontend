import React from "react";
import { NavLink } from "react-router-dom";
import { UnstyledButton } from "@mantine/core";
import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/PostAthlete.module.scss";
import Post from "../../Post";
export default function PostScout() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavLink className={styles.link} to="/scoutprofile">
          <UnstyledButton>About</UnstyledButton>
        </NavLink>
        <NavLink className={styles.link} to="/scoutprofile/post">
          <UnstyledButton>Post</UnstyledButton>
        </NavLink>
      </div>
      <div className={styles.content}>
        <Post type="post"></Post>
        <Post type="post"></Post>
        <Post type="post"></Post>
      </div>
    </div>
  );
}
