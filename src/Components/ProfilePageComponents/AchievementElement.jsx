import React from "react";
import { rem, Image, Spoiler } from "@mantine/core";
import styles from "../../scss/ProfilePageComponents/AchievementElement.module.scss";

export default function AchievementElement() {
  return (
    <div className={styles.container}>
      <Image
        style={{ width: rem(48) }}
        src="/Images/ProfilePage/instu_logo.png"></Image>
      <div className={styles.content}>
        <div className={styles.topic}>Assumption College, Thailand</div>
        <div className={styles.subtopic}>
          High School Diploma, Mathematics and Sciences
        </div>
        <div className={styles.date}>Jan 2024</div>
        <Spoiler
          showLabel="Show more"
          hideLabel="Hide"
          maxHeight={115}
          padding={20}
          className={styles.description}>
          <ul>
            <li>
              Hammock chia hexagon fanny pack microdosing swag VHS authentic.
              Intelligentsia narwhal crucifix thundercats master cleanse
              unicorn. Kale chips cardigan meditation celiac, yr pok pok narwhal
              vibecession glossier fanny pack beard bespoke kinfolk unicorn
              locavore. Pitchfork jianbing truffaut narwhal solarpunk.
            </li>
            <li>Successfully became the main player of the team.</li>
            <li>
              Successfully became a member of the national basketball team in
              the youth generation.
            </li>
            <li>Successfully became the main player of the team.</li>
            <li>
              Successfully became a member of the national basketball team in
              the youth generation.
            </li>
            <li>Successfully became the main player of the team.</li>
            <li>
              Successfully became a member of the national basketball team in
              the youth generation.
            </li>
            <li>Successfully became the main player of the team.</li>
            <li>
              Successfully became a member of the national basketball team in
              the youth generation.
            </li>
            <li>Successfully became the main player of the team.</li>
            <li>
              Successfully became a member of the national basketball team in
              the youth generation.
            </li>
            <li>Successfully became the main player of the team.</li>
          </ul>
        </Spoiler>
      </div>
    </div>
  );
}
