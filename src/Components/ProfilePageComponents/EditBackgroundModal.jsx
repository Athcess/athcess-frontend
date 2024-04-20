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
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

import styles from "../../scss/ProfilePageComponents/EditBackgroundModal.module.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { post_background, profileAthlete } from "../../Services/ProfileAPI";
import BackgroundModalElement from "./BackgroundModalElement";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function EditBackgroundModal({ opened, onClose }) {
  const form = useForm({
    initialValues: {
      topic: "",
      subTopic: "",
      date: "",
      description: "",
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: post_background,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["background"] });
      queryClient.invalidateQueries({ queryKey: ["profile"] });

      onClose();
    },
  });

  const postBackground = (e) => {
    e.preventDefault();
    console.log(form.values);
    mutation.mutate(form.values);
  };
  const query = useQuery({ queryKey: ["background"], queryFn: profileAthlete });
  if (query.status === "success") {
    const Backgrounds = query.data.data.experiences;
    console.log(Backgrounds);

    return (
      <Modal
        opened={opened}
        onClose={onClose}
        size={"lg"}
        centered
        title="Edit Background"
        radius={20}
        zIndex={1000}
        classNames={{
          header: styles.header,
          title: styles.title,
          close: styles.close,
        }}
      >
        <div className={styles.container}>
          {Backgrounds?.map((e) => {
            return (
              <BackgroundModalElement
                key={e.experience_id}
                adata={e}
              ></BackgroundModalElement>
            );
          })}

          <div className={styles.backgroundadd}>
            <Textarea
              autosize
              placeholder="Topic"
              onChange={(event) =>
                form.setFieldValue("topic", event.target.value)
              }
            />
            <DatePicker
              slotProps={{ textField: { size: "small" } }}
              label="start date"
              className={styles.dateinner}
              onChange={(event) =>
                form.setFieldValue(
                  "start_date",
                  dayjs(event).format("YYYY-MM-DD")
                )
              }
            />
            <DatePicker
              slotProps={{ textField: { size: "small" } }}
              label="end date"
              className={styles.dateinner}
              onChange={(event) =>
                form.setFieldValue(
                  "end_date",
                  dayjs(event).format("YYYY-MM-DD")
                )
              }
            />
            <Textarea
              placeholder="Write description"
              onChange={(event) =>
                form.setFieldValue("description", event.target.value)
              }
            />
            <Button w={500} color="#00A67E" onClick={postBackground}>
              ADD
            </Button>
          </div>
          <Button fullWidth color="#00A67E" onClick={() => onClose()}>
            SAVE
          </Button>
        </div>
      </Modal>
    );
  }
}
