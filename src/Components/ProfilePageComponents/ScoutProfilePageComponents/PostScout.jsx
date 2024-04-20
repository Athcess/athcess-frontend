import React from "react";
import { NavLink } from "react-router-dom";
import { Image, rem, UnstyledButton } from "@mantine/core";
import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/PostAthlete.module.scss";
import Post from "../../Post";
import NewPostModal from "../NewPostModal";
import { useQuery } from "@tanstack/react-query";
import { useDisclosure } from "@mantine/hooks";
import dayjs from "dayjs";
import { getPostProfile } from "../../../Services/ProfileAPI";
export default function PostScout({user}) {
  const [opened, { open, close }] = useDisclosure(false);
  const query = useQuery({ queryKey: ["postprofile"], queryFn: getPostProfile });
  if (query.status === "success"){
    const posts = query.data.data
    console.log(posts)
    posts.sort((a, b) => dayjs(b.created_at) - dayjs(a.created_at));

  return (
    
    
      <div className={styles.container}>
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
        {posts?.map((e)=> {
          return <Post key={e.post_id} adata={e}></Post>
        })}
        </div>
        <UnstyledButton className={styles.add} onClick={open}>
          <Image
          src="/Images/MenuBar/add_logo.png"
          style={{ width: rem(60) }}></Image>
        </UnstyledButton>
      </div>
    );
  }
  }