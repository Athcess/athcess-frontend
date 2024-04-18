import React from "react";
import { NavLink } from "react-router-dom";
import { Image, UnstyledButton, rem } from "@mantine/core";
import {useDisclosure} from "@mantine/hooks"
import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/PostAthlete.module.scss";
import Post from "../../Post";
import NewPostModal from "../NewPostModal";
export default function PostAthlete({user}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={styles.container}>
      {user.role}
      <NewPostModal opened={opened} onClose={close} user={user} />
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
        <Post type="post"></Post>
        <Post type="post"></Post>
        <Post type="post"></Post>
      </div>
      <UnstyledButton className={styles.add} onClick={open}>
        <Image
        src="/Images/MenuBar/add_logo.png"
        style={{ width: rem(60) }}></Image>
      </UnstyledButton>
    </div>
  );
}
