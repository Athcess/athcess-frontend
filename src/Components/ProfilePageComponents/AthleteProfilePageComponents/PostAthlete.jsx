import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Image, UnstyledButton, rem } from "@mantine/core";
import {useDisclosure} from "@mantine/hooks"
import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/PostAthlete.module.scss";
import Post from "../../Post";
import NewPostModal from "../NewPostModal";
import { getPostProfile } from "../../../Services/ProfileAPI";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

export default function PostAthlete({user}) {
  const [opened, { open, close }] = useDisclosure(false);
  let {username} = useParams()
  const query = useQuery({ queryKey: ["postprofile", username], queryFn: ()=>getPostProfile(username) });
  
    console.log(username)
  if (query.status === "success"){
    const posts = query.data.data
    console.log(posts)
    posts.sort((a, b) => dayjs(b.created_at) - dayjs(a.created_at));
    
  return (
    
    <div className={styles.container}>
      <NewPostModal opened={opened} onClose={close} user={user} />
      <div className={styles.header}>
        <NavLink className={styles.link} to={`/athleteprofile/${username}`}>
          <UnstyledButton>About</UnstyledButton>
        </NavLink>
        <NavLink className={styles.link} to={`/athleteprofile/${username}/post`}>
          <UnstyledButton>Post</UnstyledButton>
        </NavLink>
        <NavLink className={styles.link} to={`/athleteprofile/${username}/highlight`}>
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
