import React from "react";
import { NavLink } from "react-router-dom";
import { UnstyledButton } from "@mantine/core";
import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/PostAthlete.module.scss";
import Event from "../../Event";
import { getEventProfile } from "../../../Services/ProfileAPI";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Cookies from "js-cookie";
export default function EventOrg() {
 
  const query = useQuery({ queryKey: ["getevent"], queryFn: getEventProfile });
  if (query.status === "success"){
    
    const events = query.data.data.events
    if (typeof events != "undefined") {
    console.log(events)
    events.sort((a, b) => dayjs(b.created_at) - dayjs(a.created_at));
    }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavLink className={styles.link} to="/orgprofile">
          <UnstyledButton>About</UnstyledButton>
        </NavLink>
        {/* <NavLink className={styles.link} to="/orgprofile/post">
          <UnstyledButton>Post</UnstyledButton>
        </NavLink> */}
        <NavLink className={styles.link} to="/orgprofile/event">
          <UnstyledButton>Event</UnstyledButton>
        </NavLink>
      </div>
      <div className={styles.content}>
      {events?.map((e)=> {
        return <Event key={e.event_id} adata={e}></Event>
      })}
      </div>
    </div>
  );
}
}