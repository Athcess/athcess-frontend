import React, { useState, useEffect } from "react";
import styles from "../scss/ChatPage.module.scss";
import ChatList from "../Components/ChatPageComponents/ChatList";
import ChatBox from "../Components/ChatPageComponents/ChatBox";

export default function ChatPage() {
  return (
    <div className={styles.container}>
      <ChatList></ChatList>
      <ChatBox></ChatBox>
    </div>
  );
}
