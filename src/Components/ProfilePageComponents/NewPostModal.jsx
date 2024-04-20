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
import { useMutation, useQueryClient } from "@tanstack/react-query";

import styles from "../../scss/ProfilePageComponents/NewPostModal.module.scss";
import {
  postBlob,
  postEvent,
  postPost,
  putBlob,
  uploadedBlob,
} from "../../Services/HomeAPI";

export default function NewPostModal({ opened, onClose, user }) {
  const form = useForm({
    initialValues: {
      description: "",
      file: null,
      highlight: false,
      event: false,
      hasfile: false,
    },
  });
  const queryClient = useQueryClient();

  const mutationpost = useMutation({
    mutationFn: postPost,
    onSuccess: (data) => {
      console.log(data.data);
      if (data.data.has_attachment) {
        mutationBlob.mutate({ form: form.values, postid: data.data.post_id });
      } else {
        queryClient.invalidateQueries({ queryKey: ["postprofile"] });
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
      setTimeout(() => {queryClient.invalidateQueries({ queryKey: ["postprofile"] }) }, 1000);
      setTimeout(() => {queryClient.invalidateQueries({ queryKey: ["postfeed"] })}, 1000);

      onClose();
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

  const setFile = (event) => {
    form.setFieldValue("file", event);
    form.setFieldValue("hasfile", true);
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
            <FileInput onChange={(event) => setFile(event)} />

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
