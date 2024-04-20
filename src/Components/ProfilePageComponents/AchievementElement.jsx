import React from "react";
import { rem, Image, Spoiler } from "@mantine/core";
import styles from "../../scss/ProfilePageComponents/AchievementElement.module.scss";

export default function AchievementElement({ data}) {
  return (
    <div className={styles.container}>
      <Image
        style={{ width: rem(48) }}
        src="/Images/ProfilePage/72-724246_achievement-icon-transparent-hd-png-download.png"></Image>
      <div className={styles.content}>
        <div className={styles.topic}>{data.topic}</div>
        <div className={styles.subtopic}>{data.sub_topic}</div>
        <div className={styles.date}>{data.date}</div>
        <Spoiler
          showLabel="Show more"
          hideLabel="Hide"
          maxHeight={115}
          padding={20}
          className={styles.description}>
          {data.description}
        </Spoiler>
      </div>
    </div>
  );
}
