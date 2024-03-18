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
  Checkbox,
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
      name: "",
      password: "",
        },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
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
      console.log(form.values.email, form.values.name, form.values.password)
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
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />
            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
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
          <Anchor
            href="/signin" 
            c="dimmed"
            size="xs">
            Already have an account? Sign in
          </Anchor>
        </form>
      </Paper>
      </div>
    </div>
  );
}
