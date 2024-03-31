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
  Checkbox,
  FileInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

import styles from "../../scss/ProfilePageComponents/NewPostModal.module.scss";

export default function NewPostModal({ opened, onClose }) {
  const [images, setImages] = useState([]);

  const handleFileInputChange = (files) => {
    console.log(files);
    setImages(files);
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

        <div className={styles.content}>
          <Textarea placeholder="Write description"></Textarea>
          <div className={styles.image}>
            <Image src={images} />
          </div>

          <FileInput
            variant="unstyled"
            value={images}
            onChange={handleFileInputChange}
            placeholder="Select photos or videos to upload"
          />
          <Checkbox
            defaultChecked
            label="Add this post to your highlight page"
          />
        </div>
      </div>
    </Modal>
  );
}
