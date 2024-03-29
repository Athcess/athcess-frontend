import React from "react";
import { Outlet } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../scss/ProfilePage.module.scss";
import ProfileElement from "../../Components/ProfilePageComponents/ProfileElement";
import EditProfileModalAthlete from "../../Components/ProfilePageComponents/AthleteProfilePageComponents/EditProfileModalAthlete";

export default function ScoutProfilePage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <EditProfileModalAthlete opened={opened} onClose={close} />
      <div className={styles.container}>
        <ProfileElement type="scout"></ProfileElement>
        <Outlet></Outlet>
      </div>
    </>
  );
}
