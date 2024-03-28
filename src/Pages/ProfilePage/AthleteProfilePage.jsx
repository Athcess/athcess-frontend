import React from "react";
import { Outlet } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../scss/ProfilePage.module.scss";
import EditProfileModalAthlete from "../../Components/ProfilePageComponents/AthleteProfilePageComponents/EditProfileModalAthlete";
import ProfileElement from "../../Components/ProfilePageComponents/ProfileElement";

export default function AthleteProfilePage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <EditProfileModalAthlete opened={opened} onClose={close} />
      <div className={styles.container}>
        <ProfileElement type="athlete" openModal={open} />
        <Outlet />
      </div>
    </>
  );
}
