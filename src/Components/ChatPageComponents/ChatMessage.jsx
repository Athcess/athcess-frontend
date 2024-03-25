import React from "react";
import styles from "../../scss/ChatPageComponents/ChatMessage.module.scss";
export default function ChatMessage({ type, body }) {
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      <div className={styles.message}>{body}</div>
    </div>
  );
}
