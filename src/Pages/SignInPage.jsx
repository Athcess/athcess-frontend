import React, { useState, useEffect } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useMutation }from "@tanstack/react-query"
import { useAuth } from "../hooks/useAuth";

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
import { signin } from "../Services/WelcomeAPI";

export default function SignInPage(props) {

  const { login } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });


  const mutation = useMutation({
    mutationFn: signin,
    onSuccess: (data) => {
      props.newUser(
      {username: form.values.username,
      first_name: 'tri',
      last_name: "tri",
      role: 'athlete',
      age: data.data[0].age,
      hometown: data.data[0].hometown,
      position: data.data[0].position,
      birth_date: data.data[0].birth_date,
      education: data.data[0].education,
      teir: data.data[0].tier,
      //organization
      organization: data.data[0].club,})

      login(form.values.username);

      navigate("/home");
    },
  });

  const loginUser = (e) => {
    e.preventDefault();
    mutation.mutate(form.values);
    console.log(form.values);
    navigate("/home");
    //})
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerText}>ATHCESS</div>
      </header>
      <div className={styles.content}>
        <Paper
          className={styles.paper}
          radius="md"
          p="xl"
          withBorder
          {...props}
        >
          <Text className={styles.center} size="lg" fw={500}>
            SIGN IN
          </Text>

          <form onSubmit={loginUser}>
            <Stack>
              <TextInput
                required
                label="Username or Email"
                placeholder="Your username or email"
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
                error={form.errors.password && "Please enter a valid password."}
                radius="md"
              />
              <Anchor href="/forgetpassword" c="dimmed" size="xs">
                Forget password
              </Anchor>
            </Stack>

            <Group justify="center" mt="xl">
              <Button color="#00A67E" type="submit" radius="xl" w="100%">
                Sign in
              </Button>
            </Group>
            <Text ta="center" c="dimmed" size="xs">
              Do not have an account? &nbsp;
              <Anchor href="/signup" underline="always" c="dimmed" size="xs">
                Sign up
              </Anchor>
            </Text>
          </form>
        </Paper>
      </div>
    </div>
  );
}
