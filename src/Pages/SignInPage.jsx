
import React, { useState, useEffect } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Axios from "axios";

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
import styles from "../scss/SignInPage.module.scss";
import { jwtDecode } from "jwt-decode";

export default function SignInPage(props) {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

    const loginUser = (e) => {
        e.preventDefault();
        
        // Axios.post('', {
        //     LoginUserName: form.values.username,
        //     LoginPassword: form.values.password
        //}).then((response) => {
        console.log(form.values.username,form.values.password);
        navigate('/home')
        //})
    }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
          <div className={styles.headerText}>ATHCESS</div>
      </header>
      <div className={styles.content}>
      <Paper className={styles.paper} radius="md" p="xl" withBorder {...props}>
        <Text className={styles.center} size="lg" fw={500}>
          SIGN IN
        </Text>

        <form onSubmit={loginUser}>
          <Stack>
            <TextInput
              required
              label="Username"
              placeholder="Your username"
              value={form.values.username}
              onChange={(event) =>
                form.setFieldValue("username", event.currentTarget.value)
              }
              error={
                form.errors.username &&
                "Please enter a valid email address or username."
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
                "Please enter a valid password."
              }
              radius="md"
            />
            <Anchor 
            href="/forgetpassword" 
            c="dimmed"
            size="xs">
            Forget password
          </Anchor>
          </Stack>
          
          <Group justify="center" mt="xl">
            <Button  color="#00A67E" type="submit" radius="xl" w="100%">
              Sign in
            </Button>
          </Group>
          <Divider label="Or sign in with" labelPosition="center" my="lg" />
          {/* <Group grow mb="md" mt="md">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                var credentialResponseDecoded = jwtDecode(
                  credentialResponse.credential
                );
                console.log("Login Success", credentialResponseDecoded);
                navigate("/home");
              }}
              onError={(error) => {
                console.log("Login Failed", error);
              }}></GoogleLogin>
          </Group> */}
          <Text ta="center" c="dimmed" size="xs">Do not have an account? &nbsp;
          <Anchor 
            href="/signup" 
            underline="always"
            c="dimmed"
            size="xs">
            Sign up
          </Anchor>
          </Text>
        </form>
      </Paper>
      </div>
    </div>
  );
}
