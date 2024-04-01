import React, { useState } from "react";
import styles from "../scss/NavigationBar.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import {
  Group,
  Burger,
  rem,
  UnstyledButton,
  Image,
  Button,
  Menu,
  TextInput,
  Anchor,
  Popover,
  Autocomplete
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
import NotiDropDown from "./NotiDropDown.jsx";
export default function NavigationBar() {
  const [isLogin, setIsLogin] = useState(true);
  const [menuOpened, setmenuOpened] = useState(false);
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      tosearch: "",
    },
  });
  const search = (e) => {
    navigate("/search/" + e.tosearch);
  };
  const signout = () => {
    navigate("/signin");
  };
  const chat = () => {
    navigate("/chat");
  };
  const athleteprofile = () => {
    navigate("/athleteprofile");
  };
  const friendlist = () => {
    navigate("/friend");
  };
  const body = () => {
    navigate("/bodyanalyzer");
  };

  return (
    <header className={styles.container}>
      <div>
        <Anchor
          className={styles.headerText}
          underline="never"
          href="/home"
          size="xs"
        >
          ATHCESS
        </Anchor>
      </div>
      <form
        className={styles.search}
        onSubmit={form.onSubmit((values) => search(values))}
      >
        <Autocomplete
          className={styles.search}
          placeholder="Search"
          radius="20px"
          limit={3}
          data={['Football 1', 'Basketball 1', 'Basketball 2', 'Football 2']}
          comboboxProps={{ zIndex: 1000, offset:2 }}
          onChange={(event) =>
            form.setFieldValue("tosearch", event)
          }
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          visibleFrom="xs"
        />
      </form>
      <UnstyledButton>
        <Image src="/Images/calendar_logo.png" className={styles.image} />
      </UnstyledButton>
      <UnstyledButton onClick={chat}>
        <Image src="/Images/chat_logo.png" className={styles.image} />
      </UnstyledButton>

      <Popover width={400} withArrow shadow="md" position="bottom-start">
        <Popover.Target>
          <UnstyledButton>
            <Image src="/Images/noti_logo.png" className={styles.image} />
          </UnstyledButton>
        </Popover.Target>
        <Popover.Dropdown>
          <NotiDropDown></NotiDropDown>
        </Popover.Dropdown>
      </Popover>
      {isLogin ? (
        <UnstyledButton onClick={athleteprofile}>
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
            href="/signin"
          >
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
            onClick={friendlist}
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
            onClick={body}
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
            onClick={signout}
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
