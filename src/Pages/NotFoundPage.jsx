import React from "react";
import { Image, rem } from "@mantine/core";
import styles from "../scss/NotFoundPage.module.scss";
export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerText}>ATHCESS</div>
      </header>
      <div className={styles.content}>
        <Image
          src="/Images/logo_placeholder.png"
          style={{ width: rem(300) }}></Image>
        <h1>PAGE NOT FOUND!</h1>
      </div>
    </div>
  );
}
