import React from "react";
import { Image, rem } from "@mantine/core";
import styles from "../scss/Status.module.scss";

export function Verified() {
  return (
    <div className={styles.verify}>
      Verified
      <Image
        src="/Images/ProfilePage/correct_logo.png"
        style={{ width: rem(24) }}></Image>
    </div>
  );
}
export function Pending() {
  return <div className={styles.pending}>Pending</div>;
}
export function UEvent() {
  return <div className={styles.uEvent}>Event</div>;
}
export function OEvent() {
  return <div className={styles.oEvent}>Event</div>;
}
export function EEvent() {
  return <div className={styles.eEvent}>Event</div>;
}
