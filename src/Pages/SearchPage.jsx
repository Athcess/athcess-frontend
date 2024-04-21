import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Filter } from "../Components/SearchPageComponents/Filter";
import { Categories } from "../Components/SearchPageComponents/Categories";
import Post from "../Components/Post";
import styles from "../scss/SearchPage.module.scss";
import { Athletelist } from "../Components/SearchPageComponents/Athletelist";
import { Eventlist } from "../Components/SearchPageComponents/Eventlist";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSearch, postSearch } from "../Services/HomeAPI";
import {
  Divider,
  Image,
  SegmentedControl,
  UnstyledButton,
} from "@mantine/core";
import dayjs from "dayjs";
import IsFriend from "../Components/IsFriend";

export default function SearchPage({ user, category, setCategory, id, setId }) {
  const Position = {
    GK: "Goalkeeper",
    CB: "Center Back",
    LB: "Left Back",
    RB: "Right Back",
    CM: "Center Midfield",
    LM: "Left Midfield",
    RM: "Right Midfield",
    CAM: "Center Attacking Midfield",
    LW: "Left Wing",
    RW: "Right Wing",
    ST: "Striker",
  };

  let { tosearch } = useParams();

  var posts;

  const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: postSearch,
  //   onSuccess: (data) => {
  //       setId(data.data.search_id)
  //       queryClient.invalidateQueries({ queryKey: ["search", id]})
  //   },
  // });
  const navigate = useNavigate();
  const query = useQuery({
    queryKey: ["search", id],
    queryFn: () => getSearch(id),
  });
  if (query.status === "success") {
    posts = query.data.data.data;
    console.log(query.data.data.data);
    posts.sort((a, b) => dayjs(b.created_at) - dayjs(a.created_at));
  }
  const gotoAthleteProfile = (e) => {
    navigate("/athleteprofile/" + e);
  };
  const gotoScoutProfile = (e) => {
    navigate("/scoutprofile/" + e);
  };
  const gotoOrgProfile = (e) => {
    navigate("/orgprofile/" + e);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <Categories
          setCategory={setCategory}
          category={category}
          id={id}
          setId={setId}
        ></Categories>
      </div>
      <div className={styles.rightContent}>
        {category == "athlete" && (
          <Filter
            category={category}
            user={user}
            id={id}
            setId={setId}
          ></Filter>
        )}
        <br></br>

        {category === "post" &&
          posts?.map((e) => {
            return <Post key={e.post_id} adata={e} />;
          })}

        {category === "athlete" &&
          posts?.map((e) => {
            console.log(e);
            return (
              <>
                <div className={styles.Athletecontainer}>
                  <div className={styles.profileLeft}>
                    <UnstyledButton
                      onClick={(event) => gotoAthleteProfile(e.username)}
                    >
                      <Image
                        src="/Images/profile_logo.jpeg"
                        className={styles.profileImage}
                      />
                    </UnstyledButton>
                    <div className={styles.profileContent}>
                      <div className={styles.profileName}>
                        {e.first_name} {e.last_name}
                      </div>
                      <div className={styles.profiletext}>
                        {Position[e.position]} , {e.hometown}
                      </div>
                      <div className={styles.profiletext}>age : {e.age}</div>
                    </div>
                  </div>
                  <div className={styles.profileright}>
                  <IsFriend user = {e.username} id = {id}></IsFriend>
                  </div>
                </div>
              </>
            );
          })}

        {category === "scout" &&
          posts?.map((e) => {
            console.log(e);
            return (
              <>
                <div className={styles.Athletecontainer}>
                  <div className={styles.profileLeft}>
                    <UnstyledButton
                      onClick={(event) => gotoScoutProfile(e.username)}
                    >
                      <Image
                        src="/Images/profile_logo.jpeg"
                        className={styles.profileImage}
                      />
                    </UnstyledButton>
                    <div className={styles.profileContent}>
                      <div className={styles.profileName}>
                        {e.first_name} {e.last_name}
                      </div>
                      <div className={styles.profiletext}>{e.hometown}</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

        {category === "organization" &&
          posts?.map((e) => {
            console.log(e);
            return (
              <>
                <div className={styles.Athletecontainer}>
                  <div className={styles.profileLeft}>
                    <UnstyledButton
                      onClick={(event) => gotoOrgProfile(e.username)}
                    >
                      <Image
                        src="/Images/profile_logo.jpeg"
                        className={styles.profileImage}
                      />
                    </UnstyledButton>
                    <div className={styles.profileContent}>
                      <div className={styles.profileName}>{e.club_name}</div>
                      <div className={styles.profiletext}>{e.location}</div>
                      <div className={styles.profiletext}>
                        Followers : {e.followers}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
