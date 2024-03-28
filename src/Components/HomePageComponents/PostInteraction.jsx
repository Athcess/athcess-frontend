import React,{useState} from "react";
import { Image, UnstyledButton } from "@mantine/core";
import styles from "../../scss/HomePageComponents/PostInteraction.module.scss";

export default function PostInteraction() {
const [isLike, setIsLike] = useState(false)
function toggleLike() {
  if(isLike === true) {
      setIsLike(false);
  } else if (isLike === false) {
      setIsLike(true);
  }
}

  return (
    <div className={styles.container}>
      <UnstyledButton onClick={toggleLike}>
        {isLike ? ( <Image src="/Images/activelike_logo.png" className={styles.icon}/>): 
        (<Image src="/Images/inactivelike_logo.png" className={styles.icon}/>)
        }
  
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
