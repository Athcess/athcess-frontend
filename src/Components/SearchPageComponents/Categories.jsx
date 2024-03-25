import {React, useState} from "react";
import { Image, UnstyledButton, Button, SegmentedControl } from "@mantine/core";
import styles from "../../scss/SearchPageComponents/Categories.module.scss";

export function Categories({category,setCategory}) {
    
  return (
    <div className={styles.true}>
      <div className={styles.title}>Go to...</div>
     
      <SegmentedControl className={styles.content}
      value={category}
      onChange={setCategory}
      orientation="vertical"
      fullWidth
      color="#BBBBBB"
      size = "md"
      data={[
        { label: 'Posts', value: 'post' },
        { label: 'Athletes', value: 'athlete' },
        { label: 'Scouts', value: 'scout' },
        { label: 'Organization', value: 'oragnization' },
        { label: 'Events', value: 'event' },
      ]}
    />
      </div>
    
  );
}