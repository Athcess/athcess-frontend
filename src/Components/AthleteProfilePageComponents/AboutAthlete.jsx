import React from "react";
import { NavLink } from "react-router-dom";
import { UnstyledButton, rem, Image, Spoiler } from "@mantine/core";
import CustomRadar from "./CustomRadar";
import BackgroundElement from "./BackgroundElement";
import AchievementElement from "./AchievementElement";
import styles from "../../scss/AthleteProfilePageComponents/AboutAthlete.module.scss";
export default function AboutAthlete() {
  const radarData = {
    labels: ["Strength", "Stamina", "Insight", "Endurance", "Defense", "Magic"],
    datasets: [
      {
        label: "Physical Attributes",
        data: [3, 6, 9, 12, 15, 18],
        fill: true,
        radius: 1,
        backgroundColor: "green",
        borderColor: "green",
        pointBackgroundColor: "green",
        pointBorderColor: "green",
        pointHoverBackgroundColor: "green",
        pointHoverBorderColor: "green",
      },
    ],
  };
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
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            Physical Attributes
            <UnstyledButton className={styles.edit}>
              <Image
                src="/Images/ProfilePage/editSection_logo.png"
                style={{ width: rem(48) }}></Image>
            </UnstyledButton>
          </div>
          <div className={styles.radarContent}>
            <div className={styles.radar}>
              <CustomRadar data={radarData}></CustomRadar>
            </div>
          </div>
        </div>
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
