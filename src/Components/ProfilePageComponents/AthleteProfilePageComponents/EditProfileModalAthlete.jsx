import React from "react";
import dayjs from "dayjs";
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
  Select,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/EditProfileModal.module.scss";
import { DatePicker } from "@mui/x-date-pickers";

export default function EditProfileModalAthlete({ opened, onClose, data }) {
  const form = useForm({
    initialValues: {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      description: data.description || "",
      age: data.age || "",
      birthdate: new Date(data.birth_date) || "",
      location: data.hometown || "",
      position: data.position || "",
      height: data.height || "",
      weight: data.weight || "",
    },
  });

  // const mutation = useMutation({
  //   mutationFn: yourMutationFunction, // Replace yourMutationFunction with your actual mutation function
  //   onSuccess: () => {
  //     // Handle success
  //     onClose(); // Close the modal on success
  //   },
  // });

  const editProfile = (e) => {
    e.preventDefault();
    console.log(form.values);
    //mutation.mutate(form.values);
  };
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size={"lg"}
      centered
      title="Edit Profile"
      radius={20}
      zIndex={1000}
      classNames={{
        header: styles.header,
        title: styles.title,
        close: styles.close,
      }}
    >
      <div className={styles.container}>
        <Image
          src="/Images/profile_logo.jpeg"
          className={styles.profileImage}
        />
        <Anchor>Change picture</Anchor>

        <div className={styles.content}>
          <Text>First name</Text>
          <TextInput
            w={400}
            value={form.values.firstName}
            onChange={(event) =>
              form.setFieldValue("firstName", event.target.value)
            }
          />
          <Text>Last name</Text>
          <TextInput
            value={form.values.lastName}
            onChange={(event) =>
              form.setFieldValue("lastName", event.target.value)
            }
          />
          <Text>Bio</Text>
          <Textarea
            placeholder="Add Bio"
            value={form.values.description}
            onChange={(event) => form.setFieldValue("description", event.target.value)}
          />
        </div>

        <Text className={styles.text} fw={700}>
          Personal Information
        </Text>

        <div className={styles.container}>
          <div className={styles.content}>

            <Text>Age</Text>
            <TextInput
            w={400}
              value={form.values.age}
              onChange={(event) =>
                form.setFieldValue("age", event.target.value)
              }
            />
            <Text>Birthdate</Text>
            <DatePicker
              slotProps={{ textField: { size: "small", required: true } }}
              className={styles.dateinner}
              defaultValue={dayjs(form.values.birthdate)}
              onChange={(event) => form.setFieldValue("birth_date", event)}
            />
            <Text>Location</Text>
            <TextInput
              value={form.values.location}
              onChange={(event) =>
                form.setFieldValue("location", event.target.value)
              }
            />
            <Text>Position</Text>
            <Select
              radius="md"
              placeholder="Select position"
              searchable
              comboboxProps={{
                position: "bottom",
                middlewares: { flip: false, shift: false },
                zIndex : 1000
              }}
              value={form.values.position}
              onChange={(event) => form.setFieldValue("position", event)}
              data={[
                { value: "GK", label: "Goalkeeper" },
                { value: "CB", label: "Center Back" },
                { value: "LB", label: "Left Back" },
                { value: "RB", label: "Right Back" },
                { value: "CM", label: "Center Midfield" },
                { value: "LM", label: "Left Midfield" },
                { value: "RM", label: "Right Midfield" },
                { value: "CAM", label: "Center Attacking Midfield" },
                { value: "LW", label: "Left Wing" },
                { value: "RW", label: "Right Wing" },
                { value: "ST", label: "Striker" },
              ]}
            />
            <Text>Height</Text>
            <NumberInput
              value={form.values.height}
              onChange={(event) =>
                form.setFieldValue("height", event.target.value)
              }
            />
            <Text>Weight</Text>
            <NumberInput
              value={form.values.weight}
              onChange={(event) =>
                form.setFieldValue("weight", event.target.value)
              }
            />
          </div>
        </div>

        <Button color="#00A67E" onClick={editProfile}>
          Save
        </Button>
      </div>
    </Modal>
  );
}
