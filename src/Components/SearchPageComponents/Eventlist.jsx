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
import styles from "../../scss/SearchPageComponents/Eventlist.module.scss";

export function Eventlist() {
  return (
    <div className={styles.container}>
      <Text className={styles.text}>Events</Text>
      <Stack className={styles.profile}>
        <div className={styles.profileLeft}>
          <UnstyledButton>
            <Image src="/Images/Event.jpeg" className={styles.profileImage} />
          </UnstyledButton>
          <div className={styles.profileContent}>
            <div className={styles.profileName}>
              Football intermediate Training Camp
            </div>
            <div className={styles.profiletext}>Tue, Mar 3 - Mon, Mar 16</div>
            <div className={styles.profiletext}>
              Onsite : By Football Thailand Club
            </div>
            <div className={styles.profiledescription}>
              descriptiondescriptiondescriptiondescription
              descriptiondescriptiondescriptiondescription
              descriptiondescriptiondescriptiondescription
            </div>
            <div className={styles.profiletext}>
              <Image
                src="/Images/friend-group-members-svgrepo-com 1.png"
                className={styles.iconImage}
              />
              <Text className={styles.profiletext}>500 attendees</Text>
            </div>
          </div>
        </div>
        <Divider></Divider>
        <div className={styles.profileLeft}>
          <UnstyledButton>
            <Image src="/Images/Event.jpeg" className={styles.profileImage} />
          </UnstyledButton>
          <div className={styles.profileContent}>
            <div className={styles.profileName}>
              Football intermediate Training Camp
            </div>
            <div className={styles.profiletext}>Tue, Mar 3 - Mon, Mar 16</div>
            <div className={styles.profiletext}>
              Onsite : By Football Thailand Club
            </div>
            <div className={styles.profiledescription}>
              descriptiondescriptiondescriptiondescription
              descriptiondescriptiondescriptiondescription
              descriptiondescriptiondescriptiondescription
            </div>
            <div className={styles.profiletext}>
              <Image
                src="/Images/friend-group-members-svgrepo-com 1.png"
                className={styles.iconImage}
              />
              <Text className={styles.profiletext}>500 attendees</Text>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
}
