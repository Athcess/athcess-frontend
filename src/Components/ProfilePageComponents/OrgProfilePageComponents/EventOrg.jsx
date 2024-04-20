import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UnstyledButton } from "@mantine/core";
import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/PostAthlete.module.scss";
import Event from "../../Event";
import { getEventProfile, profileAthlete } from "../../../Services/ProfileAPI";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import Cookies from "js-cookie";
export default function EventOrg() {
  let { username } = useParams();
  const queryClient = useQueryClient();
  const proquery = useQuery({ 
    queryKey: ["profile", username], 
    queryFn: () => profileAthlete(username) 
  });
  const orgname = proquery.data?.data?.organization?.club_name;

  useEffect(() => {
    if (orgname) {
      queryClient.invalidateQueries({ queryKey: ["getevent", username] });
    }
  }, [queryClient, orgname, username]);

  const query = useQuery({ 
    queryKey: ["getevent", username], 
    queryFn: () => orgname ? getEventProfile(orgname) : Promise.resolve() 
  });
  setTimeout(() => {
    queryClient.invalidateQueries({ queryKey: ["getevent", username] });
  }, 1000);
  if (query.status === "success") {
    const events = query.data.data.events;
    if (typeof events != "undefined") {
      console.log(events);
      events.sort((a, b) => dayjs(b.created_at) - dayjs(a.created_at));
    }
    return (
      <div className={styles.container}>
        <div className={styles.header}>
        <NavLink className={styles.link} to={`/orgprofile/${username}`}>
          <UnstyledButton>About</UnstyledButton>
        </NavLink>
        {/* <NavLink className={styles.link} to="/orgprofile/post">
          <UnstyledButton>Post</UnstyledButton>
        </NavLink> */}
        <NavLink className={styles.link} to={`/orgprofile/${username}/event`}>
          <UnstyledButton>Event</UnstyledButton>
        </NavLink>
        </div>
        <div className={styles.content}>
          {events?.map((e) => {
            return <Event key={e.event_id} adata={e}></Event>;
          })}
        </div>
      </div>
    );
  }
}
