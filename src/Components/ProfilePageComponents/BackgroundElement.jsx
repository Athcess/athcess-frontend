import React from "react";
import styles from "../../scss/ProfilePageComponents/BackgroundElement.module.scss";
import { Spoiler } from "@mantine/core";
import dayjs from "dayjs";
export default function BackgroundElement({ data }) {
  const date1 = dayjs(data.start_date);
  const date2 = dayjs(data.end_date);

  let month = date2.diff(date1, "month");
  const year = Math.floor(month / 12);
  month = month - year * 12;
  return (
    <div className={styles.container}>
      <div className={styles.topic}>
        <div className={styles.bullet}>&nbsp;</div>
        {data.topic}
      </div>
      <div className={styles.content}>
        <div className={styles.verticalLineContainer}>
          <div className={styles.verticalLine}>&nbsp;</div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.duration}>
            {date1.format("MMM YYYY")} - {date2.format("MMM YYYY")} &nbsp;&nbsp;&nbsp;{year} yr {month} mo
          </div>
          <Spoiler
            showLabel="Show more"
            hideLabel="Hide"
            maxHeight={115}
            padding={20}
            className={styles.description}
          >{data.description}
          </Spoiler>
        </div>
      </div>
    </div>
  );
}
