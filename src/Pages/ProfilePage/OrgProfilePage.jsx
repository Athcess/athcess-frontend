import React from "react";
import { Outlet } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../scss/ProfilePage.module.scss";
import ProfileElement from "../../Components/ProfilePageComponents/ProfileElement";
import EditProfileModalAthlete from "../../Components/ProfilePageComponents/AthleteProfilePageComponents/EditProfileModalAthlete";

export default function OrgProfilePage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <EditProfileModalAthlete opened={opened} onClose={close} />
      <div className={styles.container}>
        <ProfileElement type="org"></ProfileElement>
        <Outlet></Outlet>
      </div>
    </>
  );
}
