import { Image, UnstyledButton } from "@mantine/core";
import styles from "../../scss/HomePageComponents/PostInteraction.module.scss";

export default function PostInteraction() {
  return (
    <div className={styles.container}>
      <UnstyledButton>
        <Image src="/Images/inactivelike_logo.png" className={styles.icon} />
      </UnstyledButton>
      <UnstyledButton>
        <Image src="/Images/comment_logo.png" className={styles.icon} />
      </UnstyledButton>
      <UnstyledButton>
        <Image src="/Images/sendto_logo.png" className={styles.icon} />
      </UnstyledButton>
      <UnstyledButton>
        <Image src="/Images/repost_logo.png" className={styles.icon} />
      </UnstyledButton>
    </div>
  );
}
