import React from "react";
import { NavLink } from "react-router-dom";
import { UnstyledButton } from "@mantine/core";
import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/PostAthlete.module.scss";
import Event from "../../Event";
export default function EventOrg() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavLink className={styles.link} to="/orgprofile">
          <UnstyledButton>About</UnstyledButton>
        </NavLink>
        <NavLink className={styles.link} to="/orgprofile/post">
          <UnstyledButton>Post</UnstyledButton>
        </NavLink>
        <NavLink className={styles.link} to="/orgprofile/event">
          <UnstyledButton>Event</UnstyledButton>
        </NavLink>
      </div>
      <div className={styles.content}>
        <Event></Event>
      </div>
    </div>
  );
}
