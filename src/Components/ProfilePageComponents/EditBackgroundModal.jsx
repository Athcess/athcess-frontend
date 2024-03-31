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

export default function EditBackgroundModal({ opened, onClose }) {
  

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
        <div className={styles.backgroundcontent}>
          <div className={styles.topic}>
            <div>Youth National Basketball Team</div>
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
          <div className={styles.sub}>Feb 2023 - Present : 1 yr 1 mo</div>
          <div className={styles.sub}>Bangkok, Thailand</div>
          <div className={styles.description}>-Successfully became a member of the national basketball team in the youth generation.</div>

        </div>
        <div className={styles.backgroundcontent}>
          <div className={styles.topic}>
            <div>Youth National Basketball Team</div>
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
          <div className={styles.sub}>Feb 2023 - Present : 1 yr 1 mo</div>
          <div className={styles.sub}>Bangkok, Thailand</div>
          <div className={styles.description}>-Successfully became a member of the national basketball team in the youth generation.</div>

        </div>

        <div className={styles.backgroundadd}>
          <TextInput placeholder="Topic"></TextInput>
          <TextInput placeholder="Duration"></TextInput>
          <TextInput placeholder="Location"></TextInput>
          <Textarea placeholder="Write description"></Textarea>
          <Button color="#00A67E">ADD</Button>
        </div>
        <Button w={500}color="#00A67E">SAVE</Button>
      </div>
    </Modal>
  );
}
