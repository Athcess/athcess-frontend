import React from "react";
import styles from "../scss/NavigationBar.module.scss";
import {
  Autocomplete,
  Group,
  Burger,
  rem,
  UnstyledButton,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";

export default function NavigationBar() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <div className={styles.container}>
      <div className={styles.headerText}>ATHCESS</div>
      <Autocomplete
        className={styles.search}
        placeholder="Search"
        radius="20px"
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
        visibleFrom="xs"
      />
      <UnstyledButton>
        <Image
          src="../../public/Images/calendar_logo.png"
          className={styles.image}
        />
      </UnstyledButton>
      <UnstyledButton>
        <Image
          src="../../public/Images/chat_logo.png"
          className={styles.image}
        />
      </UnstyledButton>
      <UnstyledButton>
        <Image
          src="../../public/Images/noti_logo.png"
          className={styles.image}
        />
      </UnstyledButton>
      <UnstyledButton>
        <Image
          src="../../public/Images/profile_logo.png"
          className={styles.image}
        />
      </UnstyledButton>
      <Burger
        className={styles.burger}
        color="white"
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
      />
    </div>
  );
}
