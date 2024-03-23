import React from "react";
import { useState } from "react";
import styles from "../scss/ChatPage.module.scss";
import { Autocomplete, rem, Button, UnstyledButton } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import FriendChat from "../Components/ChatPageComponents/FriendChat";

export default function ChatPage() {
  const [activeButton, setActiveButton] = useState("inbox");
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
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
      <div className={styles.chatContainer}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
