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

import styles from "../../scss/ProfilePageComponents/EditAchievementModal.module.scss";

export default function EditAchievementModal({ opened, onClose }) {
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
            <div className={styles.description}>High School Diploma, Mathematics and Sciences</div>
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
          <TextInput placeholder="Topic"></TextInput>
          <TextInput placeholder="Sub topic"></TextInput>
          <TextInput placeholder="Date"></TextInput>
          <Textarea placeholder="Write description"></Textarea>
          <Button color="#00A67E">ADD</Button>
        </div>
        <Button w={500} color="#00A67E">
          SAVE
        </Button>
      </div>
    </Modal>
  );
}
