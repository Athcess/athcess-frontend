import React from "react";
import { Outlet } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../scss/ProfilePage.module.scss";
import ProfileElement from "../../Components/ProfilePageComponents/ProfileElement";
import EditProfileModalAthlete from "../../Components/ProfilePageComponents/AthleteProfilePageComponents/EditProfileModalAthlete";

export default function OrgProfilePage() {


  return (
    <>
   
      <div className={styles.container}>
        <ProfileElement type="org"></ProfileElement>
        <Outlet></Outlet>
      </div>
    </>
  );
}
