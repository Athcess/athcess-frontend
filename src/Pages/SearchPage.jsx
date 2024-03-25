import React, {useState} from "react";
import {
  useParams
} from "react-router-dom";
import { Categories } from "../Components/SearchPageComponents/Categories";
import { Filter } from "../Components/SearchPageComponents/Filter";
import Post from "../Components/HomePageComponents/Post";
import styles from "../scss/SearchPage.module.scss"
export default function SearchPage() {
  let { tosearch } = useParams();
  const [category, setCategory] = useState('');

  
  return (
    
        <div className={styles.container}>
          <div className={styles.leftContent}>
              <Categories setCategory ={setCategory} category={category}></Categories>
              
          </div>
          <div className={styles.rightContent}>
          {category !=="" && (
          <Filter category={category}></Filter>
        ) }
        <br></br>
        {category === 'post' &&(
          <div className={styles.rightContent}>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          </div>

        )}
        {category === 'athletes' &&(
          <div className={styles.rightContent}>
          
          </div>

        )}

          </div>
        </div>
     
    
    
  );
}
