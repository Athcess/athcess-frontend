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
      checkpassword: "",
      role: "",
        },
    validate: {
      email: (val) => ((/^\S+@\S+$/.test(val) || val === "")? null : "Invalid email"),
      password: (val) =>
        (val.length <= 6
          ? "Password should include at least 6 characters"
          : null),
      checkpassword : (val) => (form.values.password === val ? null : "Password is not the same" ),
      role : (val) => (val != "" ? null : "Please select a role")

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
      console.log(form.values.email, form.values.firstname,form.values.lastname,form.values.username, form.values.password,form.values.role, )
        navigate('/signin');
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
              value={form.values.checkpassword}
              onChange={(event) =>
                form.setFieldValue("checkpassword", event.currentTarget.value)
              }
              error={
                form.errors.checkpassword &&
                "Password should not the same!"
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
