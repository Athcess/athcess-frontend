import React, { useState, useEffect } from "react";
import { Image, UnstyledButton, Spoiler } from "@mantine/core";
import { rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Verified, UEvent } from "../Status";
import styles from "../../scss/ProfilePageComponents/ProfileElement.module.scss";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { profileAthlete } from "../../Services/ProfileAPI";
import EditProfileModalAthlete from "./AthleteProfilePageComponents/EditProfileModalAthlete";
export default function ProfileElement({ type, openModal, user }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [profileImageSrc, setProfileImageSrc] = useState("");
  useEffect(() => {
    if (type === "athlete") {
      setProfileImageSrc("/Images/ProfilePage/athlete_logo.png");
    } else if (type === "scout") {
      setProfileImageSrc("/Images/ProfilePage/scout_logo.png");
    } else if (type === "org") {
      setProfileImageSrc("/Images/ProfilePage/org_logo.png");
    }
  }, []);

  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["repoData"], queryFn: profileAthlete });
  if (query.status === "success") {
    const birthDate = new Date(query.data.data.birth_date);
    
    console.log(query.data);
    return (
      <div className={styles.profileContainer}>
        <EditProfileModalAthlete  opened={opened} onClose={close} data={query.data.data}/>
        <div className={styles.wallpaper}>
          <Image
            className={styles.wallpaperImage}
            src="/Images/ProfilePage/wallpaper.jpg"
          ></Image>
        </div>
        <div className={styles.profileContent}>
          <div className={styles.profileImage}>
            <Image
              className={styles.image}
              src="/Images/profile_logo.jpeg"
              style={{ width: rem(150), border: "4px solid white" }}
            ></Image>
            <UnstyledButton className={styles.edit} onClick={open}>
              <Image
                src="/Images/ProfilePage/editSection_logo.png"
                style={{ width: rem(48) }}
              ></Image>
            </UnstyledButton>
          </div>
          <div className={styles.profileName}>
            <div className={styles.name}>
              Daniel Thompson , {query.data.data.age}
            </div>
            <Image src={profileImageSrc} style={{ width: rem(32) }}></Image>
            <UnstyledButton className={styles.friend}>
              Friend (2)
            </UnstyledButton>
          </div>
          {user.role === "athlete" && (
          <div className={styles.profileInfo}>
            {birthDate.getFullYear()}, Height: 180 cm, Weight: 68 kg, {query.data.data.position}
          </div>
          )}
          {user.role === "scout" && (
          <div className={styles.profileInfo}>
            {birthDate.getFullYear()}
          </div>
          )}
          <div className={styles.profileLocation}>
            <Image
              src="/Images/ProfilePage/pin_logo.png"
              style={{ width: rem(24) }}
            ></Image>
            {query.data.data.hometown}, Thailand
          </div>
          {user.role === "athlete" && (
            <Spoiler
              showLabel="Show more"
              hideLabel="Hide"
              maxHeight={125}
              padding={20}
              className={styles.profileBio}
            >
              {query.data.data.description}
            </Spoiler>
          )}
        </div>
      </div>
    );
  }
}
