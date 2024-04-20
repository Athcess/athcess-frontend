import { React, useState } from "react";
import {
  Image,
  UnstyledButton,
  Button,
  SegmentedControl,
  Stack,
  Divider,
  Text,
} from "@mantine/core";
import styles from "../../scss/SearchPageComponents/Athletelist.module.scss";

export function Athletelist(adata) {
  console.log(adata[0])
  if(typeof adata[0]!== "undefined"){
    console.log("sdasd")
  return (
    <div className={styles.container}>
      <Text className={styles.text}>Athletes</Text>
      <Stack className={styles.profile}>
        {adata?.map((e) => {
          return (
          <><div className={styles.profileLeft}>
          <UnstyledButton>
            <Image
              src="/Images/profile_logo.jpeg"
              className={styles.profileImage}
            />
          </UnstyledButton>
          <div className={styles.profileContent}>
            <div className={styles.profileName}>{e.firstname} {e.lastname}</div>
            <div className={styles.profiletext}>Footballer</div>
            <div className={styles.profiletext}>Bangkok</div>
          </div>
        </div>
        <Divider></Divider></>)
        })}

      </Stack>
    </div>
  );
}
}
