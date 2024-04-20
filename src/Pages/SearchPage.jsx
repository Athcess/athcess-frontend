import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Filter } from "../Components/SearchPageComponents/Filter";
import { Categories } from "../Components/SearchPageComponents/Categories";
import Post from "../Components/Post";
import styles from "../scss/SearchPage.module.scss";
import { Athletelist } from "../Components/SearchPageComponents/Athletelist";
import { Eventlist } from "../Components/SearchPageComponents/Eventlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postSearch } from "../Services/HomeAPI";
import { SegmentedControl } from "@mantine/core";
import dayjs from "dayjs";
export default function SearchPage({ user }) {
  let { tosearch } = useParams();
  const [category, setCategory] = useState("");

  const [id, setId] = useState("");
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["search", id],  queryFn: () => search(id) 
  });

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
      <Categories setCategory={setCategory} category={category} id = {id} setId ={setId}></Categories>
      
    </div>
        <div className={styles.rightContent}>
          {category == "athlete" && (
            <Filter category={category} user={user}></Filter>
          )}
          <br></br>
          
          
          {category === "post" && (
            <div className={styles.rightContent}>
              <Athletelist></Athletelist>
            </div>
          )}
          
          {category === "athlete" && (
            <div className={styles.rightContent}>
              <Athletelist></Athletelist>
            </div>
          )}
          {category === "event" && (
            <div className={styles.rightContent}>
              <Eventlist></Eventlist>
            </div>
          )}
        </div>
      
    </div>
  );
}
