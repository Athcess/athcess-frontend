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
import { postEvent, postPost } from "../../Services/HomeAPI";

export default function NewPostModal({ opened, onClose, user }) {
  const form = useForm({
    initialValues: {
      description: "",
      file: null,
      highlight: false,
      event: false,
    },
  });

  const mutationpost = useMutation({
    mutationFn: postPost,
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
    if (form.values.event) {
      mutationevent.mutate(form.values);
    } else {
      mutationpost.mutate(form.values);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size={"lg"}
      centered
      title="New Post"
      radius={20}
      zIndex={1000}
      classNames={{
        header: styles.header,
        title: styles.title,
        close: styles.close,
      }}
    >
      <div className={styles.container}>
        {user.role}
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
              placeholder="Write description"
              onChange={(event) =>
                form.setFieldValue("description", event.currentTarget.value)
              }
            ></Textarea>
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
