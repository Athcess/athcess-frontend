import React from "react";
import { UnstyledButton, rem, Image } from "@mantine/core";

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
                  style={{ width: rem(48) }}
                ></Image>
              </UnstyledButton>
            </div>
            <div className={styles.radarContainer}>
              <div className={styles.radar}>
                <Radar data={data} options={options}></Radar>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              Background{" "}
              <UnstyledButton className={styles.edit}>
                <Image
                  src="/Images/AthleteProfilePage/edit_logo.png"
                  style={{ width: rem(48) }}
                ></Image>
              </UnstyledButton>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              Achievement{" "}
              <UnstyledButton className={styles.edit}>
                <Image
                  src="/Images/AthleteProfilePage/edit_logo.png"
                  style={{ width: rem(48) }}
                ></Image>
              </UnstyledButton>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
