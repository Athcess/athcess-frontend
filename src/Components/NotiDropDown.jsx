import React, { useState } from "react";
import styles from "../scss/NotiDropDown.module.scss";
import {
  UnstyledButton,
  Image,
  Stack,
  Divider,
} from "@mantine/core";

export default function NotiDropDown() {
return(
  <Stack className={styles.profile}>
    <div className={styles.profile}>
      <div className={styles.profileLeft}>
        <UnstyledButton>
          <Image
            src="/Images/profile_logo.jpeg"
            className={styles.profilenotiImage}
          />
        </UnstyledButton>
        <div className={styles.profileContent}>
          <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
          <div className={styles.profiletime}>30 min</div>
        </div>
      </div>
      <div className={styles.text}>“Just made a post”</div>
    </div>
    <Divider size={2}></Divider>
    <div className={styles.profile}>
      <div className={styles.profileLeft}>
        <UnstyledButton>
          <Image
            src="/Images/profile_logo.jpeg"
            className={styles.profilenotiImage}
          />
        </UnstyledButton>
        <div className={styles.profileContent}>
          <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
          <div className={styles.profiletime}>30 min</div>
        </div>
      </div>
      <div className={styles.text}>“Sent you a Friend request”</div>
    </div>
  </Stack>
)
}
