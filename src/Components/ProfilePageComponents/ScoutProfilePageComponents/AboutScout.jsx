import React from "react";
import { NavLink } from "react-router-dom";
import { UnstyledButton, rem, Image, Spoiler } from "@mantine/core";
import BackgroundElement from "../BackgroundElement";
import AchievementElement from "../AchievementElement";
import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/AboutAthlete.module.scss";
export default function AboutScout() {
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
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            Background
            <UnstyledButton className={styles.edit}>
              <Image
                src="/Images/ProfilePage/editSection_logo.png"
                style={{ width: rem(48) }}></Image>
            </UnstyledButton>
          </div>
          <div className={styles.backgroundContent}>
            <BackgroundElement></BackgroundElement>
            <BackgroundElement></BackgroundElement>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            Achievement
            <UnstyledButton className={styles.edit}>
              <Image
                src="/Images/ProfilePage/editSection_logo.png"
                style={{ width: rem(48) }}></Image>
            </UnstyledButton>
          </div>
          <div className={styles.achievementContent}>
            <AchievementElement></AchievementElement>
            <AchievementElement></AchievementElement>
          </div>
        </div>
      </div>
    </div>
  );
}
