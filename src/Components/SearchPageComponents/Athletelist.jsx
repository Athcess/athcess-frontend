import { React, useState } from "react";
import { Image, UnstyledButton, Button, SegmentedControl, Stack, Divider, Text } from "@mantine/core";
import styles from "../../scss/SearchPageComponents/Athletelist.module.scss";

export function Athletelist() {
  return (
    <div className={styles.container}>
        <Text className={styles.text} >Athletes</Text>
      <Stack className={styles.profile}>
        
        <div className={styles.profileLeft}>
          <UnstyledButton>
            <Image
              src="/Images/profile_logo.jpeg"
              className={styles.profileImage}
            />
          </UnstyledButton>
          <div className={styles.profileContent}>
            <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
            <div className={styles.profiletext}>Footballer</div>
            <div className={styles.profiletext}>Bangkok</div>
          </div>
        </div>
        <Divider></Divider>
        <div className={styles.profileLeft}>
          <UnstyledButton>
            <Image
              src="/Images/profile_logo.jpeg"
              className={styles.profileImage}
            />
          </UnstyledButton>
          <div className={styles.profileContent}>
            <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
            <div className={styles.profiletext}>Footballer</div>
            <div className={styles.profiletext}>Bangkok</div>
          </div>
        </div>
        <Divider></Divider>
        <div className={styles.profileLeft}>
          <UnstyledButton>
            <Image
              src="/Images/profile_logo.jpeg"
              className={styles.profileImage}
            />
          </UnstyledButton>
          <div className={styles.profileContent}>
            <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
            <div className={styles.profiletext}>Footballer</div>
            <div className={styles.profiletext}>Bangkok</div>
          </div>
        </div>
        <Divider></Divider>
        <div className={styles.profileLeft}>
          <UnstyledButton>
            <Image
              src="/Images/profile_logo.jpeg"
              className={styles.profileImage}
            />
          </UnstyledButton>
          <div className={styles.profileContent}>
            <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
            <div className={styles.profiletext}>Footballer</div>
            <div className={styles.profiletext}>Bangkok</div>
          </div>
        </div>
      </Stack>
    </div>
  );
}
