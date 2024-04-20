import React from "react";
import {
  Modal,
  Text,
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Divider,
  Anchor,
  UnstyledButton,
  Image,
  Textarea,
  rem,
} from "@mantine/core";
import dayjs from "dayjs";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import styles from "../../scss/ProfilePageComponents/EditAchievementModal.module.scss";
import { post_achievement, profileAthlete } from "../../Services/ProfileAPI";
import { DatePicker } from "@mui/x-date-pickers";
import AchievementModalElement from "./AchievementModalElement";
import { useParams } from "react-router";

export default function EditAchievementModal({ opened, onClose}) {
  const form = useForm({
    initialValues: {
      topic: "",
      subTopic: "",
      date: "",
      description: "",
    },
  });

  const queryClient = useQueryClient()


  const mutation = useMutation({
    mutationFn: post_achievement,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ['achievement'] })
      queryClient.invalidateQueries({ queryKey: ['profile'] })

      onClose();
    },
  });

  const postAchievement = (e) => {
    e.preventDefault();
    console.log(form.values);
    mutation.mutate(form.values);
  };
  let {username} = useParams()
console.log(username)
  const query = useQuery({ queryKey: ["achievement", username], queryFn:()=> profileAthlete(username) });
  if (query.status === "success"){

   const Achievements = query.data.data.achievements
   console.log(Achievements)
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size={"lg"}
      centered
      title="Edit Achievement"
      radius={20}
      zIndex={1000}
      classNames={{
        header: styles.header,
        title: styles.title,
        close: styles.close,
      }}
    >
      <div className={styles.container}>
      {Achievements?.map((e)=> {
        return <AchievementModalElement key={e.ahievement_id} adata={e}></AchievementModalElement>
      })}
        <div className={styles.backgroundadd}>
          <Textarea
            autosize
            placeholder="Topic"
            onChange={(event) =>
              form.setFieldValue("topic", event.target.value)
            }
          />
          <Textarea
            autosize
            placeholder="Sub topic"
            onChange={(event) =>
              form.setFieldValue("subTopic", event.target.value)
            }
          />
          <DatePicker
            slotProps={{ textField: { size: "small"} }}
            
            className={styles.dateinner}
            onChange={(event) => form.setFieldValue("date", dayjs(event).format('YYYY-MM-DD'))}
          />
          <Textarea
            placeholder="Write description"
            onChange={(event) =>
              form.setFieldValue("description", event.target.value)
            }
          />
          <Button w={500} color="#00A67E" onClick={postAchievement}>
            ADD
          </Button>
        </div>
        <Button fullWidth color="#00A67E" onClick={()=>onClose()}>
            SAVE
          </Button>
      </div>
    </Modal>
  );
}}
