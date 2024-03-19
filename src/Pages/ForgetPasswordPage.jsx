import React, { useState, useEffect } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Axios from "axios";

import {
  TextInput,
  Text,
  Paper,
  Group,
  Button,
  Anchor,
  Stack,
} from "@mantine/core";
import styles from "../scss/ForgetPasswordPage.module.scss";

export default function ForgetPasswordPage(props) {
    const form = useForm({
        initialValues: {
        email: "",
        },
        validate: {
            email: (val) => ((/^\S+@\S+$/.test(val))? null : "Invalid email"),
        }
    });

    const forgetpassword = (e) => {
        e.preventDefault();
        form.validate();
        if(form.isValid()){
        // Axios.post('', {
        //     Email: form.values.email,
        // 
        //}).then((response) => {
        console.log(form.values.email);
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
        <Text className={styles.center} size="xl" fw={700}>
          FORGOT PASSWORD
        </Text>

        <form onSubmit={forgetpassword}>
          <Stack>
            <Text style={{ marginTop: 15}}>
    
            Enter your email address below and we will send you a link to reset your password
            </Text>
            <TextInput
              required
              label="Email"
              placeholder="Enter email"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
              radius="md"
            />
          </Stack>
          
          <Group justify="center" mt="xl">
            <Button  color="#00A67E" type="submit" radius="xl" w="100%" style={{ marginBottom: 15}}>
              SUBMIT
            </Button>
          </Group>
          <Anchor
            href="/signin" 
            c="dimmed"
            size="xs">
            Go back to sign in
          </Anchor>
        </form>
      </Paper>
      </div>
    </div>
  );
}
