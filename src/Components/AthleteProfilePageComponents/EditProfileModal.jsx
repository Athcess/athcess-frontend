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
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../scss/AthleteProfilePageComponents/EditProfileModal.module.scss";

export default function EditProfileModal({ opened, onClose }) {
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
    <Modal opened={opened} onClose={onClose} centered title="Edit Profile">
      <div></div>
    </Modal>
  );
}
