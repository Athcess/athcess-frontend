import React, { useState } from "react";
import styles from "../scss/NavigationBar.module.scss";
import {
  Autocomplete,
  Group,
  Burger,
  rem,
  UnstyledButton,
  Image,
  Button,
  Menu,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSearch,
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";

export default function NavigationBar() {
  const [isLogin, setIsLogin] = useState(true);
  const [menuOpened, setmenuOpened] = useState(false);
  const [opened, { toggle }] = useDisclosure();
  return (
    <header className={styles.container}>
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
        <Image src="/Images/calendar_logo.png" className={styles.image} />
      </UnstyledButton>
      <UnstyledButton>
        <Image src="/Images/chat_logo.png" className={styles.image} />
      </UnstyledButton>
      <UnstyledButton>
        <Image src="/Images/noti_logo.png" className={styles.image} />
      </UnstyledButton>
      {isLogin ? (
        <UnstyledButton>
          <Image
            src="/Images/profile_logo.jpeg"
            className={styles.profileImage}
          />
        </UnstyledButton>
      ) : (
        <div style={{ width: 220 }}>
          <Button
            fullWidth
            variant="white"
            color="#007458"
            size="md"
            radius="xl"
            component="a"
            href="/signin">
            Sign in
          </Button>
        </div>
      )}
      <Menu offset={20} className={styles.menu}>
        <Menu.Target>
          <Burger
            className={styles.burger}
            color="white"
            // opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            onClick={toggle}
            leftSection={
              <Image
                src="/Images/MenuBar/add_logo.png"
                style={{ width: rem(32), height: rem(32) }}
              ></Image>
            }
          >
            Post
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item
            onClick={toggle}
            leftSection={
              <Image
                src="/Images/MenuBar/friend_logo.png"
                style={{ width: rem(32), height: rem(32) }}
              ></Image>
            }
          >
            Friends
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item
            onClick={toggle}
            leftSection={
              <Image
                src="/Images/MenuBar/body_logo.png"
                style={{ width: rem(32), height: rem(32) }}
              ></Image>
            }
          >
            Body Analyzer
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item
            onClick={toggle}
            leftSection={
              <Image
                src="/Images/MenuBar/logout_logo.png"
                style={{ width: rem(32), height: rem(32) }}
              ></Image>
            }
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </header>
  );
}
