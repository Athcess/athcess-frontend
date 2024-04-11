import React from "react";
import { Button, Group, Anchor, Image, Text } from "@mantine/core";
import styles from "../scss/WelcomePage.module.scss";

export default function WelcomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerText}>ATHCESS</div>
      </header>
      <div className={styles.content}>
        <div>
          <h1>Athcess, a platform to success!</h1>
          <Group justify="center" gap={30}>
            <div className={styles.button}>
              <Button
                fullWidth
                color="#007458"
                size="md"
                radius="xl"
                component="a"
                href="/signin">
                SIGN IN
              </Button>
            </div>
            <div className={styles.button}>
              <Button
                fullWidth
                color="#00A67E"
                size="md"
                radius="xl"
                component="a"
                href="/signup">
                SIGN UP
              </Button>
            </div>
          </Group>
          <Text ta="center">
            <Anchor underline="always" href="/homeguest" c="dimmed" size="md">
              Continue as a Guest
            </Anchor>
          </Text>
        </div>
        <div>
          <Image
            radius="md"
            h={500}
            w="auto"
            src="../../public/Images/logo_placeholder.png"
          />
        </div>
      </div>
    </div>
  );
}
