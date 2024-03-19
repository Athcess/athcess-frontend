import React from "react";
import styles from "../scss/HomePage.module.scss";
import { Box } from "@mantine/core";
import { Grid } from "@mantine/core";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.upcomingEvent}></div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.post}>
          <div className={styles.postProfile}></div>
          <div className={styles.postText}></div>
          <div className={styles.postImage}></div>
          <div className={styles.postInteraction}></div>
          <div className={styles.postComment}></div>
        </div>
        <div className={styles.post}>
          <div className={styles.postProfile}></div>
          <div className={styles.postText}></div>
          <div className={styles.postImage}></div>
          <div className={styles.postInteraction}></div>
          <div className={styles.postComment}></div>
        </div>
        <div className={styles.post}>
          <div className={styles.postProfile}></div>
          <div className={styles.postText}></div>
          <div className={styles.postImage}></div>
          <div className={styles.postInteraction}></div>
          <div className={styles.postComment}></div>
        </div>
      </div>
    </div>
  );
}
