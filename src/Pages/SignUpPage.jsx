import React, { useState, useEffect } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { DatePicker } from "@mui/x-date-pickers";
import {
  TextInput,
  PasswordInput,
  NumberInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  SegmentedControl,
  Anchor,
  Stack,
  Select,
  MultiSelect,
  Checkbox,
  Image,
} from "@mantine/core";
import styles from "../scss/SignUpPage.module.scss";
import { signup } from "../Services/WelcomeAPI";

export default function SignUpPage(props) {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: "",
      role: "",
      age: "",
      hometown: "",
      position: "",
      birth_date: "",
      education: ["", ""],
      //organization
      club_name:"",
      organization: "",
      location: "",
    },
    validate: {
      email: (val) =>
        /^\S+@\S+$/.test(val) || val === "" ? null : "Invalid email",
      password: (val) =>
        val.length < 6 ? "Password should include at least 6 characters" : null,
      confirm_password: (val) =>
        form.values.password === val ? null : "Password is not the same",
      role: (val) => (val != "" ? null : "Please select a role"),
      phone: (val) =>
        (/^\d+$/.test(val) && (val.length == 10 || val.length == 9)) ||
        form.values.role != "organization"
          ? null
          : "Invalid phone number, do not enter -",
      postalcode: (val) =>
        (/^\d+$/.test(val) && val.length == 5) ||
        form.values.role != "organization"
          ? null
          : "Invalid postal code",
    },
  });

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {},
  });

  const signupUser = (e) => {
    e.preventDefault();
    form.validate();
    if (form.isValid()) {
      mutation.mutate(form.values);

      console.log(form.values);
      navigate("/home");
    }
  };
  const setadmin = () => {
    if (form.values.role !== "admin") {
      form.setFieldValue("role", "admin");
    } else {
      form.setFieldValue("role", "");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
      <Image
            
            h={48}
            w="auto"
            src="../../public/Images/athcess.png"
          />
        <div className={styles.headerText}>

          
        </div>
      </header>
      <div className={styles.content}>
        <Paper
          className={styles.paper}
          radius="md"
          p="xl"
          withBorder
          {...props}>
          <Text className={styles.center} size="lg" fw={500}>
            SIGN UP
          </Text>

          <form onSubmit={signupUser}>
            <Stack>
              <TextInput
                required
                label="Username"
                placeholder="Your username"
                value={form.values.username}
                onChange={(event) =>
                  form.setFieldValue("username", event.currentTarget.value)
                }
                radius="md"
              />
              <TextInput
                label="Email"
                placeholder="Optional"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email && "Invalid email"}
                radius="md"
              />
              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
                error={
                  form.errors.password &&
                  "Password should include at least 6 characters"
                }
                radius="md"
              />
              <PasswordInput
                required
                label="Confirm Password"
                placeholder="Confirm password"
                value={form.values.confirm_password}
                onChange={(event) =>
                  form.setFieldValue(
                    "confirm_password",
                    event.currentTarget.value
                  )
                }
                error={
                  form.errors.confirm_password && "Password is not the same!"
                }
                radius="md"
              />
              {form.values.role !== "admin" && (
                <SegmentedControl
                  style={{ marginTop: 15 }}
                  required
                  color="#00A67E"
                  value={form.values.role}
                  onChange={(event) => form.setFieldValue("role", event)}
                  data={[
                    { label: "Athlete", value: "athlete" },
                    { label: "Scout", value: "scout" },
                  ]}
                />
              )}
              <Checkbox
                label="Are you organization?"
                color="#00A67E"
                onChange={setadmin}></Checkbox>
              {form.errors.role && (
                <span style={{ color: "red" }}>Please select a role</span>
              )}
              
              {(form.values.role === "athlete" ||
                form.values.role === "scout" ||
                form.values.role === "admin") && (
                <>
                  <Text ta="center" size="lg" fw={500}>
                    Personal Information
                  </Text>
                  <Divider />
                  <TextInput
                    required
                    label="First Name"
                    placeholder="Your first name"
                    value={form.values.first_name}
                    onChange={(event) =>
                      form.setFieldValue(
                        "first_name",
                        event.currentTarget.value
                      )
                    }
                    radius="md"
                  />
                  <TextInput
                    required
                    label="Last Name"
                    placeholder="Your last name"
                    value={form.values.last_name}
                    onChange={(event) =>
                      form.setFieldValue("last_name", event.currentTarget.value)
                    }
                    radius="md"
                  />
                  {form.values.role === "admin" && (
                    <>
                    <TextInput
                      required
                      label="Organization Name"
                      placeholder="Your organization"
                      value={form.values.club_name}
                      onChange={(event) =>
                        form.setFieldValue(
                          "club_name",
                          event.currentTarget.value
                        )
                      }
                      radius="md"
                    />
                    <Select
                    radius="md"
                    required
                    label="Location"
                    placeholder="Enter location"
                    searchable
                    comboboxProps={{
                      position: "bottom",
                      middlewares: { flip: false, shift: false },
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
</>
                  )}
                  {(form.values.role === "athlete" ||
                form.values.role === "scout") &&(
                  <>
                  <NumberInput
                    required
                    label="Age"
                    placeholder="Enter your age"
                    value={form.values.age}
                    onChange={(event) => form.setFieldValue("age", event)}
                    radius="md"
                  />
                  <Group gap={5}>
                    <Text className={styles.date} size="sm" fw={500}>
                      Birth date{" "}
                      <Text span c="red" inherit>
                        *
                      </Text>
                    </Text>
                    <DatePicker
                      slotProps={{
                        textField: { size: "small", required: true },
                      }}
                      className={styles.dateinner}
                      onChange={(event) =>
                        form.setFieldValue("birth_date", event)
                      }
                    />
                    
                  </Group>
                  </>
                )}
                  {form.values.role === "athlete" && (
                    <>
                      <Select
                        radius="md"
                        label="Position"
                        placeholder="Select positions"
                        searchable
                        comboboxProps={{
                          position: "bottom",
                          middlewares: { flip: false, shift: false },
                        }}
                        //value={form.values.position}
                        onChange={(event) =>
                          form.setFieldValue("position", event)
                        }
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
                      <Group className={styles.education}>
                        <TextInput
                          w={318}
                          required
                          label="School name"
                          placeholder="Your school name"
                          onChange={(event) =>
                            form.setFieldValue(
                              "education.0",
                              event.currentTarget.value
                            )
                          }
                          radius="md"
                        />
                        <Select
                          radius="md"
                          w={100}
                          required
                          label="Grade"
                          placeholder=""
                          comboboxProps={{
                            position: "bottom",
                            middlewares: { flip: false, shift: false },
                          }}
                          //value={form.values.position}
                          onChange={(event) =>
                            form.setFieldValue("education.1", event)
                          }
                          data={[
                            "P1",
                            "P2",
                            "P3",
                            "P4",
                            "P5",
                            "P6",
                            "M1",
                            "M2",
                            "M3",
                            "M4",
                            "M5",
                            "M6",
                            "Year 1",
                            "Year 2",
                            "Year 3",
                            "Year 4",
                            "Other",
                          ]}
                        />
                      </Group>
                    </>
                  )}
{(form.values.role === "athlete" ||
                form.values.role === "scout") &&(
                  <Select
                    radius="md"
                    required
                    label="Hometown"
                    placeholder="Enter hometown"
                    searchable
                    comboboxProps={{
                      position: "bottom",
                      middlewares: { flip: false, shift: false },
                    }}
                    value={form.values.hometown}
                    onChange={(event) => form.setFieldValue("hometown", event)}
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
                )}

                  {form.values.role === "scout" && (
                    <TextInput
                      label="If belong to an organization"
                      placeholder="Enter organization name"
                      value={form.values.organization}
                      onChange={(event) =>
                        form.setFieldValue(
                          "organization",
                          event.currentTarget.value
                        )
                      }
                      radius="md"
                    />
                  )}
                </>
              )}
            </Stack>
            <Group justify="center" mt="xl">
              <Button color="#00A67E" type="submit" radius="xl" w="100%">
                Sign Up
              </Button>
            </Group>
            <Text ta="center" c="dimmed" size="xs">
              {" "}
              Already have an account? &nbsp;
              <Anchor underline="always" href="/signin" c="dimmed" size="xs">
                Sign in
              </Anchor>
            </Text>
          </form>
        </Paper>
      </div>
    </div>
  );
}
