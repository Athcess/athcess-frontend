import React from "react";
import { Image, UnstyledButton, Button } from "@mantine/core";
import styles from "../../scss/HomePageComponents/UpcomingEventContainer.module.scss";

export function UpcomingEventContainerTrue() {
  return (
    <div className={styles.true}>
      <div className={styles.title}>Upcoming Events!</div>
      <div className={styles.content}>
        <ul className={styles.events}>
          <li>dsadsadsadsadsadsd</li>
          <li>dsadasdsdsdadad</li>
          <li>dsadasdsadasdsadadsadsadsadasdsa</li>
          <li>dsadssadadsadasdsadasdasdasdsa</li>
          <li>ddsdssdsdwqdssadaas</li>
        </ul>
      </div>
    </div>
  );
}
export function UpcomingEventContainerFalse() {
  return (
    <div className={styles.false}>
      <Image src="/Images/lock_logo.png" className={styles.lock}></Image>
      <div className={styles.header}>Sign in to unlock this feature</div>
      <div style={{ width: 220 }}>
        <Button
          fullWidth
          variant="filled"
          color="#007458"
          size="md"
          radius="xl"
          component="a"
          href="/signin">
          Sign in
        </Button>
      </div>
    </div>
  );
}
