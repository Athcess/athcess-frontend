import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Filter } from "../Components/SearchPageComponents/Filter";
import { Categories } from "../Components/SearchPageComponents/Categories";
import Post from "../Components/Post";
import styles from "../scss/SearchPage.module.scss";
import { Athletelist } from "../Components/SearchPageComponents/Athletelist";
import { Eventlist } from "../Components/SearchPageComponents/Eventlist";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSearch, postSearch } from "../Services/HomeAPI";
import { Divider, Image, SegmentedControl, UnstyledButton } from "@mantine/core";
import dayjs from "dayjs";
export default function SearchPage({ user }) {

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
  const [category, setCategory] = useState("");
  var posts;
  const [id, setId] = useState("");
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["search", id],
    queryFn: () => getSearch(id),
  });
  if (query.status === "success") {
    posts = query.data.data.data;
    console.log(query.data.data.data);
    posts.sort((a, b) => dayjs(b.created_at) - dayjs(a.created_at));
  }
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
          <Filter category={category} user={user}></Filter>
        )}
        <br></br>

        {category === "post" &&
          posts?.map((e) => {
            return <Post key={e.post_id} adata={e} />;
          })}

        {category === "athlete" &&
          posts?.map((e) => {
            console.log(e)
            return (
              <>
              <div className={styles.Athletecontainer}>
                <div className={styles.profileLeft}>
              <UnstyledButton>
                <Image
                  src="/Images/profile_logo.jpeg"
                  className={styles.profileImage}
                />
              </UnstyledButton>
              <div className={styles.profileContent}>
                <div className={styles.profileName}>{e.first_name} {e.last_name}</div>
                <div className={styles.profiletext}>{Position[e.position]} , {e.hometown}</div>
                <div className={styles.profiletext}>age : {e.age}</div>
               
              </div>
            </div>
            </div></>)
          })}

          
        {category === "event" && (
          <div className={styles.rightContent}>
            <Eventlist></Eventlist>
          </div>
        )}
      </div>
    </div>
  );
}
