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
import { useMutation } from "@tanstack/react-query";

import styles from "../../scss/ProfilePageComponents/NewPostModal.module.scss";
import { postBlob, postEvent, postPost } from "../../Services/HomeAPI";

export default function NewEventModal({ opened, onClose, user }) {
  const form = useForm({
    initialValues: {
      club: user.organization,
      description: "",
      start_time: "",
      end_time: "",
    },
  });

  const mutationBlob = useMutation({
    mutationFn: postBlob,
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const mutationevent = useMutation({
    mutationFn: postEvent,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const post = (e) => {
    e.preventDefault();
    console.log(form.values);
    mutationevent.mutate(form.values);
    mutationBlob.mutate(form.values);
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
            src="/Images/profile_logo.jpeg"
            className={styles.profileImage}
          />
          <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
        </div>
        <form onSubmit={post}>
          <div className={styles.content}>
            <Textarea
              placeholder="Write content"
              onChange={(event) =>
                form.setFieldValue("content", event.currentTarget.value)
              }></Textarea>
            <FileInput
              onChange={(event) => form.setFieldValue("file", event)}
            />

            {user.role == "athlete" && (
              <Checkbox
                label="Add this post to your highlight page"
                onChange={(event) =>
                  form.setFieldValue("highlight", event.currentTarget.checked)
                }
              />
            )}
            {user.role == "admin" && (
              <Checkbox
                label="Add to event"
                onChange={(event) =>
                  form.setFieldValue("event", event.currentTarget.checked)
                }
              />
            )}
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