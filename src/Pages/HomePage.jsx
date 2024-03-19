import React from "react";
import styles from "../scss/HomePage.module.scss";
import { Box } from "@mantine/core";
import { Grid } from "@mantine/core";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Grid className={styles.grid}>
        <Grid.Col span={4} className={styles.gridCol}>
          1
        </Grid.Col>
        <Grid.Col span="auto" className={styles.gridCol}>
          <div className={styles.post}>
            <div className={styles.postProfile}></div>
            <div className={styles.postText}></div>
            <div className={styles.postImage}></div>
            <div className={styles.postInteraction}></div>
            <div className={styles.postComment}></div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
