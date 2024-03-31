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
  Textarea
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/EditProfileModal.module.scss";

export default function EditProfileModalAthlete({ opened, onClose }) {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const editProfile = (e) => {
    // Your editProfile function logic
  };

  return (
    <Modal opened={opened} onClose={onClose} size={"lg"}centered title="Edit Profile" radius={20}zIndex={1000} classNames={{header:styles.header, title:styles.title, close:styles.close}}>
      <div className={styles.container}>
            <Image
              src="/Images/profile_logo.jpeg"
              className={styles.profileImage}
            />
            <Anchor>Change picture</Anchor>

          <div className={styles.content}>
            <Text>First name</Text>
            <TextInput w={400} value={"วี่หว่อง หว่องวี่"}></TextInput>
            <Text>Last name</Text>
            <TextInput value={"หว่องวี่"}></TextInput>
            <Text>Bio</Text>
            <Textarea placeholder="Add Bio"></Textarea>
          </div>
          </div>
          <Text className={styles.text} fw={700}>Personal Information</Text>
          <div className={styles.container}>
          <div className={styles.content}>
            <Text>Sex</Text>
            <TextInput w={400}  value={"Male"}></TextInput>
            <Text>Age</Text>
            <TextInput value={"3416"}></TextInput>
            <Text>Birthdate</Text>
            <TextInput value={"1/1/2008"}></TextInput>
            <Text>Location</Text>
            <TextInput value={"Bangkok, Thailand"}></TextInput>
            <Text>Position</Text>
            <TextInput placeholder="Add Position"></TextInput>
            <Text>Height</Text>
            <TextInput value={"180"}></TextInput>
            <Text>Weight</Text>
            <TextInput value={"68"}></TextInput>
          </div>
          </div>

      
    </Modal>
  );
}
