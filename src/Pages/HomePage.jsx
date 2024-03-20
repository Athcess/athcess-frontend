import React from "react";
import styles from "../scss/HomePage.module.scss";
import { Box, Grid, UnstyledButton, Image } from "@mantine/core";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.upcomingEvent}>
          <div className={styles.upcomingEventTitle}>Upcoming Events!</div>
          <div className={styles.upcomingEventContent}>
            <ul className={styles.events}>
              <li>dsadsadsadsadsadsd</li>
              <li>dsadasdsdsdadad</li>
              <li>dsadasdsadasdsadadsadsadsadasdsa</li>
              <li>dsadssadadsadasdsadasdasdasdsa</li>
              <li>ddsdssdsdwqdssadaas</li>
            </ul>
            <UnstyledButton className={styles.calendar}>
              <Image src="/Images/calendar_color_logo.png" />
            </UnstyledButton>
          </div>
        </div>
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
