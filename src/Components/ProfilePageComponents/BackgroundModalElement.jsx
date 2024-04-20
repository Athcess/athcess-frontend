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
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

import styles from "../../scss/ProfilePageComponents/EditBackgroundModal.module.scss";
import { del_background, put_background } from "../../Services/ProfileAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function BackgroundModalElement({ adata}) {
    const queryClient = useQueryClient()
    const [edit, setEdit] = useState(false);
    const [del, setDel] = useState(false);
    const form = useForm({
      initialValues: {
        id : adata.experience_id,
        created_at: adata.created_at,
        topic: adata.topic || "",
        start_date: adata.start_date || "",
        end_date: adata.end_date || "",
        description: adata.description || "",
      },
    });
    const date1 = dayjs(adata.start_date);
  const date2 = dayjs(adata.end_date);

  
    const putmutation = useMutation({
      mutationFn: put_background, 
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries({ queryKey: ['profile'] })
        queryClient.invalidateQueries({ queryKey: ['background'] })
      },
    });
  
    const delmutation = useMutation({
      mutationFn: del_background, 
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['profile'] })
        queryClient.invalidateQueries({ queryKey: ['background'] })
  
        console.log(data);
      },
    });
  
    const updateBackground = (e) => {
      e.preventDefault();
      console.log(form.values);
      putmutation.mutate(form.values);
      setEdit(false);
    };
  
    const deleteBackground = (e) => {
      e.preventDefault();
      console.log(form.values);
      delmutation.mutate(form.values);
      setDel(true);
    };
  
    return (
      <>
        {(!edit&& !del)&& (
          <div className={styles.backgroundcontent}>
            <Image
              style={{ width: rem(48), height: rem(48) }}
              src="/Images/ProfilePage/instu_logo.png"
            ></Image>
            <div className={styles.content}>
              <div className={styles.topic}>{form.values.topic}</div>
              <div className={styles.description}>
            {date1.format("MMM YYYY")} - {date2.format("MMM YYYY")}
          </div>
              <div className={styles.description}> {form.values.description}</div>
            </div>
  
            <div>
              <UnstyledButton onClick={ ()=>setEdit(true)}>
                <Image
                  src="/Images/ProfilePage/editSection_logo.png"
                  style={{ width: rem(30) }}
                ></Image>
              </UnstyledButton>
              <UnstyledButton onClick={deleteBackground}>
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
         <DatePicker
            slotProps={{ textField: { size: "small"} }}
            label="start date"
            value={date1}
            className={styles.dateinner}
            onChange={(event) => form.setFieldValue("start_date", dayjs(event).format('YYYY-MM-DD'))}
          />
          <DatePicker
            slotProps={{ textField: { size: "small"} }}
            label="end date"
            value={date2}
            className={styles.dateinner}
            onChange={(event) => form.setFieldValue("end_date", dayjs(event).format('YYYY-MM-DD'))}
          />
          <Textarea
            placeholder="Write description"
            value={form.values.description}
            onChange={(event) =>
              form.setFieldValue("description", event.target.value)
            }
          />
          
            <Button w={500} color="#00A67E" onClick={updateBackground}>
              SAVE
            </Button>
          </div>
        )}
      </>
    );
}