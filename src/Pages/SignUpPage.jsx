import React, { useState, useEffect } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  SegmentedControl,
  Anchor,
  Stack,
  Select,
} from "@mantine/core";
import styles from "../scss/SignUpPage.module.scss";
import { jwtDecode } from "jwt-decode";

export default function SignUpPage(props) {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      passwordcheck: "",
      role: "",
      organizationName: "",
      phone: "",
      address: "",
      city: "",
      province: "",
      postalcode: "",
      
    
        },
    validate: {
      email: (val) => ((/^\S+@\S+$/.test(val) || val === "")? null : "Invalid email"),
      password: (val) =>
        (val.length <= 6
          ? "Password should include at least 6 characters"
          : null),
      passwordcheck : (val) => (form.values.password === val ? null : "Password is not the same" ),
      role : (val) => (val != "" ? null : "Please select a role"),
      phone: (val) => (((/^\d+$/.test(val) && (val.length == 10 || val.length == 9)) || form.values.role != "Organization") ? null : "Invalid phone number, do not enter -"),
      postalcode: (val) => (((/^\d+$/.test(val) && (val.length == 5))|| form.values.role != "Organization") ? null : "Invalid postal code")

    },
  });

  const signupUser = (e) => {
    e.preventDefault();
    form.validate();
    if(form.isValid()){
    // Axios.post('', {
    //     Email: form.values.email,
    //     UserName: form.values.name,
    //     Password: form.values.password
    // }).then(() => {
      console.log(form.values)
        navigate('/home');
        //})
    }

    
}


  return (
    <div className={styles.container}>
      <header className={styles.header}>
          <div className={styles.headerText}>ATHCESS</div>
      </header>
      <div className={styles.content}>
      <Paper className={styles.paper} radius="md" p="xl" withBorder {...props}>
        <Text className={styles.center} size="lg" fw={500}>
          SIGN UP
        </Text>

        <form onSubmit={signupUser}>
          <Stack>
            <TextInput
              required
              label="First Name"
              placeholder="Your first name"
              value={form.values.firstname}
              onChange={(event) =>
                form.setFieldValue("firstname", event.currentTarget.value)
              }
              radius="md"
            />
            <TextInput
              required
              label="Last Name"
              placeholder="Your last name"
              value={form.values.lastname}
              onChange={(event) =>
                form.setFieldValue("lastname", event.currentTarget.value)
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
              placeholder="confirm password"
              value={form.values.passwordcheck}
              onChange={(event) =>
                form.setFieldValue("passwordcheck", event.currentTarget.value)
              }
              error={
                form.errors.passwordcheck &&
                "Password is not the same!"
              }
              radius="md"
            />
            <SegmentedControl
            style={{ marginTop: 15}}
            required
            color="#00A67E"
            value={form.values.role}
            onChange={(event) =>
              form.setFieldValue("role", event)
            }
            data={[
                  { label: 'Athlete', value: 'Athlete' },
                  { label: 'Scout', value: 'Scout' },
                  { label: 'Organization', value: 'Organization' },
            ]}
            />
            {form.errors.role && <span style={{ color: 'red' }}>Please select a role</span>}
            {form.values.role === "Organization" && ( 
                <>
                <Text ta='center' size="lg" fw={500}>
                  Oraganization Information
                </Text>
                <Divider/>
                  <TextInput
                    required
                    label="Organization Name"
                    placeholder="Enter organization name"
                    value={form.values.organizationName}
                    onChange={(event) =>
                      form.setFieldValue("organizationName", event.currentTarget.value)
                    }
                    radius="md"
                  />
                  <TextInput
                    required
                    label="Phone"
                    placeholder="Enter phone number"
                    value={form.values.phone}
                    onChange={(event) =>
                      form.setFieldValue("phone", event.currentTarget.value)
                    }
                    error={form.errors.phone && "Invalid phone number, do not enter -"}
                    radius="md"
                  />
                  <TextInput
                    required
                    label="Address"
                    placeholder="Enter address"
                    value={form.values.address}
                    onChange={(event) =>
                      form.setFieldValue("address", event.currentTarget.value)
                    }
                    radius="md"
                  />
                  <TextInput
                    required
                    label="City"
                    placeholder="Enter city"
                    value={form.values.city}
                    onChange={(event) =>
                      form.setFieldValue("city", event.currentTarget.value)
                    }
                    radius="md"
                  />
                  <Select
                    label="Province"
                    placeholder=""
                    searchable
                    comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false } }}
                    value={form.values.province}
                    onChange={(event) =>
                      form.setFieldValue("province", event)
                    }
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
                      "Yasothon"
                  ]}
                    
                  />
                  <TextInput
                    required
                    label="Postal code"
                    placeholder="Enter postal code"
                    value={form.values.postalcode}
                    onChange={(event) =>
                      form.setFieldValue("postalcode", event.currentTarget.value)
                    }
                    error={form.errors.postalcode && "Invalid postal code"}
                    radius="md"
                  />
                </>
              )}
          </Stack>
          <Group justify="center" mt="xl">
            <Button color="#00A67E" type="submit" radius="xl" w="100%">
              Sign Up
            </Button>
          </Group>
          <Divider label="Or sign up with" labelPosition="center" my="lg" />
          <Group grow mb="md" mt="md">
            {/* <GoogleLogin
              onSuccess={(credentialResponse) => {
                var credentialResponseDecoded = jwtDecode(
                  credentialResponse.credential
                );
                console.log("Login Success", credentialResponseDecoded);
                navigate("/home");
              }}
              onError={(error) => {
                console.log("Login Failed", error);
              }}></GoogleLogin> */}
          </Group>
          <Text ta="center" c="dimmed" size="xs"> Already have an account? &nbsp;
          <Anchor
          
            underline="always"
            href="/signin" 
            c="dimmed"
            size="xs">
            Sign in
          </Anchor>
          </Text>
        </form>
      </Paper>
      </div>
    </div>
  );
}
