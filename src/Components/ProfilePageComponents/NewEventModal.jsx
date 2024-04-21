import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
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
  Checkbox,
  FileInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import styles from "../../scss/ProfilePageComponents/NewPostModal.module.scss";
import { postBlob, postEvent, postPost, putBlob, uploadedBlob } from "../../Services/HomeAPI";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { profileAthlete } from "../../Services/ProfileAPI";
import Cookies from "js-cookie"

export default function NewEventModal({ opened, onClose, user, profilepic }) {
  const club = Cookies.get("orgname");
  const form = useForm({

    initialValues: {
      club: club,
      description: "",
      file: null,
      hasfile: false,
      start_time: "",
      end_time: "",
    },
  });
 
    const queryClient = useQueryClient();
  
    const mutationevent = useMutation({
      mutationFn: postEvent,
      onSuccess: (data) => {
        console.log(data.data);
        if (data.data.has_attachment) {
          mutationBlob.mutate({ form: form.values, eventid: data.data.event_id});
        } else {
          queryClient.invalidateQueries({ queryKey: ["getevent"] });
          queryClient.invalidateQueries({ queryKey: ["postfeed"] });
  
          onClose();
        }
      },
    });
    const mutationBlob = useMutation({
      mutationFn: postBlob,
      onSuccess: (data) => {
        const blob_id = data.postgras_id;
        const url = data.signed_url;
        console.log(url);
        const reqdata = { url: url, file: form.values.file };
        putmutationBlob.mutate(reqdata);
        uploadedmutationBlob.mutate(blob_id);
      },
    });
  
    const putmutationBlob = useMutation({
      mutationFn: putBlob,
      onSuccess: (data) => {
        console.log(data);
      },
    });
  
    const uploadedmutationBlob = useMutation({
      mutationFn: uploadedBlob,
      onSuccess: (data) => {
        console.log(data);
        setTimeout(() => {
          queryClient.invalidateQueries({ queryKey: ["getevent"] });
        }, 1000);
        setTimeout(() => {
          queryClient.invalidateQueries({ queryKey: ["postfeed"] });
        }, 1000);
  
        onClose();
      },
    });
    const post = (e) => {
      e.preventDefault();
      console.log(form.values);
  
      mutationevent.mutate(form.values);
    };
  
    const setFile = (event) => {
      form.setFieldValue("file", event);
      form.setFieldValue("hasfile", true);
    };
  

  console.log(user);
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size={"lg"}
      centered
      title="New Event"
      radius={20}
      zIndex={1000}
      classNames={{
        header: styles.header,
        title: styles.title,
        close: styles.close,
      }}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <Image
            src={profilepic== null ? "/Images/defualt_profile.png": profilepic}
            className={styles.profileImage}
          />
          <div className={styles.profileName}>{club}</div>
        </div>
        <form onSubmit={post}>
          <div className={styles.content}>
            <Textarea
              placeholder="Write content"
              onChange={(event) =>
                form.setFieldValue("description", event.currentTarget.value)
              }></Textarea>
              <DateTimePicker
            slotProps={{ textField: { size: "small"} }}
            label="start time"
        
            className={styles.dateinner}
            onChange={(event) => form.setFieldValue("start_time", dayjs(event).format('YYYY-MM-DD'))}
          />
          <DateTimePicker
            slotProps={{ textField: { size: "small"} }}
            label="end time"
            
            className={styles.dateinner}
            onChange={(event) => form.setFieldValue("end_time", dayjs(event).format('YYYY-MM-DD'))}
          />
            <FileInput
              onChange={(event) => setFile(event)}
            />

            
           
          </div>
          <br></br>
          <Button fullWidth color="#00A67E" type="submit">
            POST
          </Button>
        </form>
      </div>
    </Modal>
  );
}
