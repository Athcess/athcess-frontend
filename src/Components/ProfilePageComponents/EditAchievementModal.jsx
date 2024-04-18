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
import { useMutation } from "@tanstack/react-query";

import styles from "../../scss/ProfilePageComponents/EditAchievementModal.module.scss";
import { post_achievement } from "../../Services/ProfileAPI";

export default function EditAchievementModal({ opened, onClose }) {
  const form = useForm({
    initialValues: {
      topic: "",
      subTopic: "",
      date: "",
      description: "",
    },
  });

  const mutation = useMutation({
    mutationFn: post_achievement, // Assuming you have a function named updateAchievement for updating achievements
    onSuccess: (data) => {
      console.log(data);
      onClose(); // Close the modal on successful update
    },
  });

  const postAchievement = (e) => {
    e.preventDefault();
    console.log(form.values);
    mutation.mutate(form.values);
  };
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
        <div className={styles.achievementcontent}>
          <Image
            style={{ width: rem(48), height: rem(48) }}
            src="/Images/ProfilePage/instu_logo.png"
          ></Image>
          <div className={styles.content}>
            <div className={styles.topic}>Youth National Basketball Team</div>
            <div className={styles.description}>
              High School Diploma, Mathematics and Sciences
            </div>
            <div className={styles.sub}>Jan 2024 </div>
            <div className={styles.description}> -Grade: 3.89</div>
          </div>

          <div>
            <UnstyledButton>
              <Image
                src="/Images/ProfilePage/editSection_logo.png"
                style={{ width: rem(30) }}
              ></Image>
            </UnstyledButton>
            <UnstyledButton>
              <Image
                src="/Images/ProfilePage/Bin.png"
                style={{ width: rem(30) }}
              ></Image>
            </UnstyledButton>
          </div>
        </div>

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
          <Textarea
            autosize
            placeholder="Date"
            onChange={(event) => form.setFieldValue("date", event.target.value)}
          />
          <Textarea
            placeholder="Write description"
            onChange={(event) =>
              form.setFieldValue("description", event.target.value)
            }
          />
          <Button w={500} color="#00A67E" onClick={postAchievement}>
            SAVE
          </Button>
        </div>
      </div>
    </Modal>
  );
}
