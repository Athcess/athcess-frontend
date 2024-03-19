import React from "react";
import { Button, Group, Image } from "@mantine/core";
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
            <div style={{ width: 220 }}>
              <Button
                fullWidth
                color="#007458"
                size="md"
                radius="xl"
                component="a"
                href="/signin">
                Sign in{" "}
              </Button>
            </div>
            <div style={{ width: 220 }}>
              <Button
                fullWidth
                color="#00A67E"
                size="md"
                radius="xl"
                component="a"
                href="/signup">
                Sign up{" "}
              </Button>
            </div>
          </Group>
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
