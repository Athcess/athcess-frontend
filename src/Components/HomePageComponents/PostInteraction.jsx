import React, { useState } from "react";
import {
  Image,
  UnstyledButton,
  Modal,
  TextInput,
  rem,
  Button,
  Text,
  Textarea,
  Spoiler
} from "@mantine/core";
import styles from "../../scss/HomePageComponents/PostInteraction.module.scss";

import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";

export default function PostInteraction() {
  const [isLike, setIsLike] = useState(false);
  const [shareopened, shareto] = useDisclosure(false);
  const [repostopened, repost] = useDisclosure(false);

  function toggleLike() {
    if (isLike === true) {
      setIsLike(false);
    } else if (isLike === false) {
      setIsLike(true);
    }
  }

  return (
    <div className={styles.container}>
      <UnstyledButton onClick={toggleLike}>
        {isLike ? (
          <Image src="/Images/activelike_logo.png" className={styles.icon} />
        ) : (
          <Image src="/Images/inactivelike_logo.png" className={styles.icon} />
        )}
      </UnstyledButton>
      <UnstyledButton>
        <Image src="/Images/comment_logo.png" className={styles.icon} />
      </UnstyledButton>
      <Modal
        opened={shareopened}
        onClose={shareto.close}
        title="Share to"
        centered
        classNames={{ content: styles.modal, header:styles.header, title:styles.title, close:styles.close }}
        radius={20}
        zIndex={1000} 
      >
        <TextInput
          className={styles.search}
          placeholder="Search"
          radius="20px"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        />
        <div className={styles.profile}>
          <UnstyledButton className={styles.profileContent}>
            <Image
              src="/Images/profile_logo.jpeg"
              className={styles.profileImage}
            />
            <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
          </UnstyledButton>
          <UnstyledButton className={styles.profileContent}>
            <Image
              src="/Images/profile_logo.jpeg"
              className={styles.profileImage}
            />
            <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
          </UnstyledButton>
          <UnstyledButton className={styles.profileContent}>
            <Image
              src="/Images/profile_logo.jpeg"
              className={styles.profileImage}
            />
            <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
          </UnstyledButton>
          <UnstyledButton className={styles.profileContent}>
            <Image
              src="/Images/profile_logo.jpeg"
              className={styles.profileImage}
            />
            <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
          </UnstyledButton>
          <UnstyledButton className={styles.profileContent}>
            <Image
              src="/Images/profile_logo.jpeg"
              className={styles.profileImage}
            />
            <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
          </UnstyledButton>
        </div>
        <div className={styles.send}>
          <Button fullWidth color="#00A67E">
            SEND
          </Button>
        </div>
      </Modal>
      <UnstyledButton>
        <Image
          src="/Images/sendto_logo.png"
          className={styles.icon}
          onClick={shareto.open}
        />
      </UnstyledButton>
      <Modal
        opened={repostopened}
        onClose={repost.close}
        title="Repost"
        centered
        classNames={{ content: styles.modal, header:styles.header, title:styles.title, close:styles.close }}
        radius={20}
        zIndex={1000} 
      >
        
        <div className={styles.repost}>
          <div className={styles.repostLeft}>
            <UnstyledButton>
              <Image
                src="/Images/profile_logo.jpeg"
                className={styles.repostImage}
              />
            </UnstyledButton>
            <p className={styles.repostContent}>
              <div className={styles.repostName}>วี่หว่อง หว่องวี่</div>
            </p>
          </div>
        </div>
        <Textarea placeholder="What's on your mind?" radius={10} m={10}>
          
        </Textarea>
        <div className={styles.postcontent}>
        <div className={styles.repost}>
          <div className={styles.repostLeft}>
            <UnstyledButton>
              <Image
              w={40}
                src="/Images/profile_logo.jpeg"
                className={styles.repostImage}
              />
            </UnstyledButton>
            <p className={styles.repostContent}>
              <div className={styles.repostName}>วี่หว่อง หว่องวี่</div>
            </p>
          </div>
        </div>
        <Spoiler
          showLabel="Show more"
          hideLabel="Hide"
          maxHeight={50}
          padding={20}
          className={styles.text}>
          I'm baby occupy meditation authentic PBR&B prism, banjo etsy normcore
          sartorial franzen umami subway tile. Disrupt wayfarers lo-fi, bruh art
          party photo booth tilde man bun. Cred crucifix af mustache, direct
          trade tofu kombucha praxis. Freegan chartreuse enamel pin master
          cleanse bruh, kickstarter microdosing you probably haven't heard of
          them vexillologist migas franzen unicorn DIY kinfolk. Tilde hoodie pug
          microdosing squid PBR&B 90's. Yes plz skateboard poke enamel pin
          kitsch bushwick. Meditation franzen kale chips, art party YOLO artisan
          seitan sustainable stumptown yr banh mi Venmo letterpress coloring
          book, vice chartreuse tattooed umami literally forage JOMO direct
          trade helvetica ennui cray taiyaki. Williamsburg jianbing pork belly
          hella. Put a bird on it banjo raw denim, 90's semiotics echo park
          cornhole keffiyeh tattooed JOMO slow-carb pork belly try-hard
          kickstarter ugh. Dreamcatcher sustainable copper mug, hell of retro
          quinoa same VHS selvage chambray. Church-key vaporware lo-fi sus vice
          kinfolk schlitz art party skateboard tacos vape. Activated charcoal
          thundercats retro salvia green juice paleo irony vape vinyl affogato
          fingerstache mustache polaroid neutra. Coloring book organic tumeric
          jean shorts deep v aesthetic pok pok everyday carry, food truck paleo
          gochujang shabby chic wayfarers before they sold out.
        </Spoiler>
      <video className={styles.postVideo} controls>
        <source src="/Videos/1996750-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <Image className={styles.postImage} src="/Images/post1_image.png"></Image> */}
        </div>
        < div >
          <Button fullWidth color="#00A67E">
            REPOST
          </Button>
        </div>
        
      </Modal>
      <UnstyledButton>
        <Image
          src="/Images/repost_logo.png"
          className={styles.icon}
          onClick={repost.open}
        />
      </UnstyledButton>
    </div>
  );
}
