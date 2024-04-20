import React, { useState } from "react";
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
import {
  del_achievement,
  put_achievement,
} from "../../Services/ProfileAPI";
import { DatePicker } from "@mui/x-date-pickers";

export default function AchievementModalElement({ adata}) {
  const queryClient = useQueryClient()
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);
  const form = useForm({
    initialValues: {
      id : adata.ahievement_id,
      created_at: adata.created_at,
      topic: adata.topic || "",
      subTopic: adata.sub_topic || "",
      date: adata.date || "",
      description: adata.description || "",
    },
  });

  const putmutation = useMutation({
    mutationFn: put_achievement, 
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      queryClient.invalidateQueries({ queryKey: ['achievement'] })
    },
  });

  const delmutation = useMutation({
    mutationFn: del_achievement, 
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      queryClient.invalidateQueries({ queryKey: ['achievement'] })

      console.log(data);
    },
  });

  const updateAchievement = (e) => {
    e.preventDefault();
    console.log(form.values);
    putmutation.mutate(form.values);
    setEdit(false);
  };

  const deleteAchievement = (e) => {
    e.preventDefault();
    console.log(form.values);
    delmutation.mutate(form.values);
    setDel(true);
  };

  return (
    <>
      {(!edit&& !del)&& (
        <div className={styles.achievementcontent}>
           <Image
        style={{ width: rem(48) ,height: rem(48)}}
        src="/Images/ProfilePage/72-724246_achievement-icon-transparent-hd-png-download.png"></Image>
          <div className={styles.content}>
            <div className={styles.topic}>{form.values.topic}</div>
            <div className={styles.description}>{form.values.subTopic}</div>
            <div className={styles.sub}>{form.values.date}</div>
            <div className={styles.description}> {form.values.description}</div>
          </div>

          <div>
            <UnstyledButton onClick={ ()=>setEdit(true)}>
              <Image
                src="/Images/ProfilePage/editSection_logo.png"
                style={{ width: rem(30) }}
              ></Image>
            </UnstyledButton>
            <UnstyledButton onClick={deleteAchievement}>
              <Image
                src="/Images/ProfilePage/Bin.png"
                style={{ width: rem(30) }}
              ></Image>
            </UnstyledButton>
          </div>
        </div>
      )}
      {(edit && !del )&&(
        <div className={styles.backgroundadd}>
          <Textarea
            autosize
            placeholder="Topic"
            value={form.values.topic}
            onChange={(event) =>
              form.setFieldValue("topic", event.target.value)
            }
          />
          <Textarea
            autosize
            placeholder="Sub topic"
            value={form.values.subTopic}
            onChange={(event) =>
              form.setFieldValue("subTopic", event.target.value)
            }
          />
          <DatePicker
            slotProps={{ textField: { size: "small" } }}
            value={dayjs(form.values.date)}
            className={styles.dateinner}
            onChange={(event) => form.setFieldValue("date", dayjs(event).format('YYYY-MM-DD'))}
          />
          <Textarea
            placeholder="Write description"
            value={form.values.description}
            onChange={(event) =>
              form.setFieldValue("description", event.target.value)
            }
          />
          <Button w={500} color="#00A67E" onClick={updateAchievement}>
            SAVE
          </Button>
        </div>
      )}
    </>
  );
}
