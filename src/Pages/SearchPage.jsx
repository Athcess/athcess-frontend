import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Categories } from "../Components/SearchPageComponents/Categories";
import { Filter } from "../Components/SearchPageComponents/Filter";
import Post from "../Components/Post";
import styles from "../scss/SearchPage.module.scss";
import { Athletelist } from "../Components/SearchPageComponents/Athletelist";
import { Eventlist } from "../Components/SearchPageComponents/Eventlist";
export default function SearchPage({user}) {
  let { tosearch } = useParams();
  const [category, setCategory] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <Categories setCategory={setCategory} category={category}></Categories>
      </div>
      <div className={styles.rightContent}>
        {category !== "" && 
        <Filter category={category} user = {user}></Filter>
        }
        <br></br>
        {category === "post" && (
          <div className={styles.rightContent}>
            <Post></Post>
            <Post></Post>
            <Post></Post>
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
