import React from "react";
import { UnstyledButton, rem, Image, Spoiler } from "@mantine/core";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import { Radar } from "react-chartjs-2";
ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

import styles from "../../scss/AthleteProfilePageComponents/AboutAthlete.module.scss";
export default function AboutAthlete() {
  const data = {
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
  const options = { elements: { line: { borderWidth: 2 } } };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <UnstyledButton>About</UnstyledButton>
          <UnstyledButton>Post</UnstyledButton>
          <UnstyledButton>Highlight</UnstyledButton>
        </div>
        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              Physical Attributes
              <UnstyledButton className={styles.edit}>
                <Image
                  src="/Images/AthleteProfilePage/edit_logo.png"
                  style={{ width: rem(48) }}></Image>
              </UnstyledButton>
            </div>
            <div className={styles.radarContent}>
              <div className={styles.radar}>
                <Radar data={data} options={options}></Radar>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              Background
              <UnstyledButton className={styles.edit}>
                <Image
                  src="/Images/AthleteProfilePage/edit_logo.png"
                  style={{ width: rem(48) }}></Image>
              </UnstyledButton>
            </div>
            <div className={styles.backgroundContent}>
              <div className={styles.backgroundElement}>
                <div className={styles.topic}>
                  Youth National Basketball Team
                </div>
                <div className={styles.topicContent}>
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
                        Hammock chia hexagon fanny pack microdosing swag VHS
                        authentic. Intelligentsia narwhal crucifix thundercats
                        master cleanse unicorn. Kale chips cardigan meditation
                        celiac, yr pok pok narwhal vibecession glossier fanny
                        pack beard bespoke kinfolk unicorn locavore. Pitchfork
                        jianbing truffaut narwhal solarpunk.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                    </ul>
                  </Spoiler>
                </div>
              </div>
              <div className={styles.backgroundElement}>
                <div className={styles.topic}>
                  Youth National Basketball Team
                </div>
                <div className={styles.topicContent}>
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
                        Hammock chia hexagon fanny pack microdosing swag VHS
                        authentic. Intelligentsia narwhal crucifix thundercats
                        master cleanse unicorn. Kale chips cardigan meditation
                        celiac, yr pok pok narwhal vibecession glossier fanny
                        pack beard bespoke kinfolk unicorn locavore. Pitchfork
                        jianbing truffaut narwhal solarpunk.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                    </ul>
                  </Spoiler>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              Achievement
              <UnstyledButton className={styles.edit}>
                <Image
                  src="/Images/AthleteProfilePage/edit_logo.png"
                  style={{ width: rem(48) }}></Image>
              </UnstyledButton>
            </div>
            <div className={styles.achievementContent}>
              <div className={styles.achievementElement}>
                <Image
                  style={{ width: rem(48) }}
                  src="/Images/AthleteProfilePage/instu_logo.png"></Image>
                <div className={styles.detail}>
                  <div className={styles.topic}>
                    Assumption College, Thailand
                  </div>
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
                        Hammock chia hexagon fanny pack microdosing swag VHS
                        authentic. Intelligentsia narwhal crucifix thundercats
                        master cleanse unicorn. Kale chips cardigan meditation
                        celiac, yr pok pok narwhal vibecession glossier fanny
                        pack beard bespoke kinfolk unicorn locavore. Pitchfork
                        jianbing truffaut narwhal solarpunk.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>{" "}
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>{" "}
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>{" "}
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>{" "}
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                    </ul>
                  </Spoiler>
                </div>
              </div>
              <div className={styles.achievementElement}>
                <Image
                  style={{ width: rem(48) }}
                  src="/Images/AthleteProfilePage/instu_logo.png"></Image>
                <div className={styles.detail}>
                  <div className={styles.topic}>
                    Assumption College, Thailand
                  </div>
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
                        Hammock chia hexagon fanny pack microdosing swag VHS
                        authentic. Intelligentsia narwhal crucifix thundercats
                        master cleanse unicorn. Kale chips cardigan meditation
                        celiac, yr pok pok narwhal vibecession glossier fanny
                        pack beard bespoke kinfolk unicorn locavore. Pitchfork
                        jianbing truffaut narwhal solarpunk.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>{" "}
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>{" "}
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>{" "}
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>{" "}
                      <li>
                        Successfully became a member of the national basketball
                        team in the youth generation.
                      </li>
                      <li>Successfully became the main player of the team.</li>
                    </ul>
                  </Spoiler>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
