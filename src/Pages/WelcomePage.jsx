import React from "react";
import { Button, Group, Anchor, Image, Text } from "@mantine/core";
import styles from "../scss/WelcomePage.module.scss";

export default function WelcomePage() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.background}
        src="/Images/background_welcome.png"></Image>
      <header className={styles.header}>
        <div className={styles.headerText}>ATHCESS</div>
      </header>
      <div className={styles.content}>
        <div>
          <div className={styles.title}>
            <div className={styles.t1}>PLATFORM TO SUCCESS!</div>
            <div className={styles.t2}>ATHCESS</div>
          </div>

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
            h={400}
            w="auto"
            src="../../public/Images/athcess.png"
          />
        </div>
      </div>
    </div>
  );
}
