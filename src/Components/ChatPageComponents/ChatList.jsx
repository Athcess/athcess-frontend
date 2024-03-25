import React, { useState } from "react";
import { UnstyledButton, Autocomplete, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import FriendChat from "./FriendChat";
import styles from "../../scss/ChatPageComponents/ChatList.module.scss";

export default function ChatList() {
  const [activeButton, setActiveButton] = useState("inbox");
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>Chat</div>
        <Autocomplete
          className={styles.search}
          placeholder="Search Inbox"
          radius="20px"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          visibleFrom="xs"
        />
        <div className={styles.categories}>
          <UnstyledButton
            className={styles.button}
            onClick={(event) => {
              event.preventDefault();
              setActiveButton("inbox");
            }}
            data-active={activeButton === "inbox" || undefined}
            key="inbox"
          >
            Inbox
          </UnstyledButton>
          <UnstyledButton
            className={styles.button}
            onClick={(event) => {
              event.preventDefault();
              setActiveButton("groups");
            }}
            data-active={activeButton === "groups" || undefined}
            key="groups"
          >
            groups
          </UnstyledButton>
        </div>
      </div>
      <div className={styles.chatList}>
        <FriendChat></FriendChat>
        <FriendChat></FriendChat>
      </div>
      <div className={styles.list}></div>
    </div>
  );
}
