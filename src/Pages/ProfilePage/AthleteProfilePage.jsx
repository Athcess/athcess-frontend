import React from "react";
import { Outlet } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../scss/ProfilePage.module.scss";
import EditProfileModalAthlete from "../../Components/ProfilePageComponents/AthleteProfilePageComponents/EditProfileModalAthlete";
import ProfileElement from "../../Components/ProfilePageComponents/ProfileElement";

export default function AthleteProfilePage({ user }) {
  return (
    <>
      <div className={styles.container}>
        <ProfileElement type="athlete" user={user} />
        <Outlet />
      </div>
    </>
  );
}
