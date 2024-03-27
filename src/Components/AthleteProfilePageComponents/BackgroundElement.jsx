import React from "react";
import styles from "../../scss/AthleteProfilePageComponents/BackgroundElement.module.scss";
import { Spoiler } from "@mantine/core";
export default function BackgroundElement() {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>
        <div className={styles.bullet}>&nbsp;</div>
        Youth National Basketball Team
      </div>
      <div className={styles.content}>
        <div className={styles.verticalLineContainer}>
          <div className={styles.verticalLine}>&nbsp;</div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.duration}>
            Feb 2023 - Present &nbsp;&nbsp;&nbsp;1 yr 1 mo
          </div>
          <div className={styles.location}>Bangkok, Thailand</div>
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
                unicorn. Kale chips cardigan meditation celiac, yr pok pok
                narwhal vibecession glossier fanny pack beard bespoke kinfolk
                unicorn locavore. Pitchfork jianbing truffaut narwhal solarpunk.
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
    </div>
  );
}
