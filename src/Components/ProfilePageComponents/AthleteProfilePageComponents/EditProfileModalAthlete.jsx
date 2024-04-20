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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/EditProfileModal.module.scss";
import { DatePicker } from "@mui/x-date-pickers";
import { editProfile_athleteInformation } from "../../../Services/ProfileAPI";

export default function EditProfileModalAthlete({ opened, onClose, data }) {
  const form = useForm({
    initialValues: {
      education: data.education,
      firstName: data.first_name || "",
      lastName: data.last_name || "",
      description: data.description || "",
      age: data.age || "",
      birthdate: new Date(data.birth_date) || "",
      location: data.hometown || "",
      position: data.position || "",
      tier:data.tier
    },
  });

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: editProfile_athleteInformation, // Replace yourMutationFunction with your actual mutation function
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profileelement'] })
      onClose(); // Close the modal on success
    },
  });

  const editProfile = (e) => {
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
          <Text fw={700} h={30}>
            First name
          </Text>
          <Text w={400}>{form.values.firstName}</Text>
          <Text fw={700} h={30}>
            Last name
          </Text>
          <Text w={400}>{form.values.lastName}</Text>
          {data.role === "athlete" && (
            <>
              <Text fw={700}>Bio</Text>
              <Textarea
                placeholder="Add Bio"
                value={form.values.description}
                onChange={(event) =>
                  form.setFieldValue("description", event.target.value)
                }
              />
            </>
          )}
        </div>
        <Divider></Divider>
        <Text className={styles.text} fw={700}>
          Personal Information
        </Text>

        <div className={styles.content}>
          <Text>Age</Text>
          <TextInput
            w={400}
            value={form.values.age}
            onChange={(event) => form.setFieldValue("age", event.target.value)}
          />
          <Text>Birthdate</Text>
          <DatePicker
            slotProps={{ textField: { size: "small", required: true } }}
            className={styles.dateinner}
            defaultValue={dayjs(form.values.birthdate)}
            onChange={(event) => form.setFieldValue("birth_date", event)}
          />
          <Text>Location</Text>
          <Select
            radius="md"
            searchable
            comboboxProps={{
              position: "bottom",
              middlewares: { flip: false, shift: false },
              zIndex : 1000
            }}
            value={form.values.location}
            onChange={(event) => form.setFieldValue("location", event)}
            data={[
              "Amnat Charoen",
              "Ang Thong",
              "Bangkok",
              "Bueng Kan",
              "Buri Ram",
              "Chachoengsao",
              "Chai Nat",
              "Chaiyaphum",
              "Chanthaburi",
              "Chiang Mai",
              "Chiang Rai",
              "Chon Buri",
              "Chumphon",
              "Kalasin",
              "Kamphaeng Phet",
              "Kanchanaburi",
              "Khon Kaen",
              "Krabi",
              "Lampang",
              "Lamphun",
              "Loei",
              "Lop Buri",
              "Mae Hong Son",
              "Maha Sarakham",
              "Mukdahan",
              "Nakhon Nayok",
              "Nakhon Pathom",
              "Nakhon Phanom",
              "Nakhon Ratchasima",
              "Nakhon Sawan",
              "Nakhon Si Thammarat",
              "Nan",
              "Narathiwat",
              "Nong Bua Lamphu",
              "Nong Khai",
              "Nonthaburi",
              "Pathum Thani",
              "Pattani",
              "Phang Nga",
              "Phatthalung",
              "Phayao",
              "Phetchabun",
              "Phetchaburi",
              "Phichit",
              "Phitsanulok",
              "Phra Nakhon Si Ayutthaya",
              "Phrae",
              "Phuket",
              "Prachin Buri",
              "Prachuap Khiri Khan",
              "Ranong",
              "Ratchaburi",
              "Rayong",
              "Roi Et",
              "Sa Kaeo",
              "Sakon Nakhon",
              "Samut Prakan",
              "Samut Sakhon",
              "Samut Songkhram",
              "Saraburi",
              "Satun",
              "Sing Buri",
              "Sisaket",
              "Songkhla",
              "Sukhothai",
              "Suphan Buri",
              "Surat Thani",
              "Surin",
              "Tak",
              "Trang",
              "Trat",
              "Ubon Ratchathani",
              "Udon Thani",
              "Uthai Thani",
              "Uttaradit",
              "Yala",
              "Yasothon",
            ]}
          />
          {data.role === "athlete" && (
            <>
              <Text>Position</Text>
              <Select
                radius="md"
                placeholder="Select position"
                searchable
                comboboxProps={{
                  position: "bottom",
                  middlewares: { flip: false, shift: false },
                  zIndex: 1000,
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
            </>
          )}
        </div>

        <Button color="#00A67E" onClick={editProfile}>
          Save
        </Button>
      </div>
    </Modal>
  );
}
