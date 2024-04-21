import {React, useState} from "react";
import { Image, UnstyledButton, Button, SegmentedControl } from "@mantine/core";
import styles from "../../scss/SearchPageComponents/Categories.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postSearch } from "../../Services/HomeAPI";
import dayjs from "dayjs";
import { useParams } from "react-router";

export function Categories({category,setCategory, id , setId}) {
    let { tosearch } = useParams();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: postSearch,
        onSuccess: (data) => {
            setId(data.data.search_id)
            queryClient.invalidateQueries({ queryKey: ["search", id]})
        },
      });
    
      const Search = (e) => {
        mutation.mutate({ type: e, data: tosearch });
      };
    
  return (
    <div className={styles.true}>
      <div className={styles.title}>Go to...</div>
     
      <SegmentedControl className={styles.content}
      value={category}
      onChange={(event) => {
        setCategory(event);
        Search(event);
      }}
      orientation="vertical"
      fullWidth
      color="#BBBBBB"
      size = "md"
      data={[
        { label: 'Posts', value: 'post' },
        { label: 'Athletes', value: 'athlete' },
        { label: 'Scouts', value: 'scout' },
        { label: 'Organization', value: 'organization' }
      ]}
    />
      </div>
    
  );
}