import React from "react";
import { Outlet } from "react-router";

import { useDisclosure } from "@mantine/hooks";
import styles from "../../scss/ProfilePage.module.scss";
import EditProfileModal from "../../Components/ProfilePageComponents/AthleteProfilePageComponents/EditProfileModalAthlete";
import ProfileElement from "../../Components/ProfilePageComponents/ProfileElement";
export default function ScoutProfilePage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <EditProfileModal opened={opened} onClose={close} />

      <div className={styles.container}>
        <ProfileElement type="scout"></ProfileElement>
        <Outlet></Outlet>
      </div>
    </>
  );
}
