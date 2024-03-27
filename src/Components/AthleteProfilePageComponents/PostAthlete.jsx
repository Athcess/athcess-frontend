import React from "react";
import { NavLink } from "react-router-dom";
import { UnstyledButton } from "@mantine/core";
import styles from "../../scss/AthleteProfilePageComponents/PostAthlete.module.scss";
import Post from "../HomePageComponents/Post";
export default function PostAthlete() {
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
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  );
}
