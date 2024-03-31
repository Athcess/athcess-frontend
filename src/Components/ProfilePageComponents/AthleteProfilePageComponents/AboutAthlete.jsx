import React from "react";
import { NavLink } from "react-router-dom";
import { UnstyledButton, rem, Image, Spoiler } from "@mantine/core";
import {useDisclosure} from "@mantine/hooks"
import CustomRadar from "./CustomRadar";
import BackgroundElement from "../BackgroundElement";
import AchievementElement from "../AchievementElement";
import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/AboutAthlete.module.scss";
import EditBackgroundModal from "../EditBackgroundModal";
import EditAchievementModal from "../EditAchievementModal";
export default function AboutAthlete() {
  const [Backgroundopened, Background] = useDisclosure(false);
  const [Achievementopened, Achievement] = useDisclosure(false);
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
      <EditBackgroundModal opened={Backgroundopened} onClose={Background.close} />
      <EditAchievementModal opened={Achievementopened} onClose={Achievement.close} />
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
            <UnstyledButton className={styles.edit} onClick={Background.open}>
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
            <UnstyledButton className={styles.edit} onClick={Achievement.open}>
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
