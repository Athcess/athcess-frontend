import React from "react";
import { Image, UnstyledButton, Spoiler, TextInput } from "@mantine/core";
import PostInteraction from "./PostInteraction";
import Comment from "./Comment";
import styles from "../../scss/HomePageComponents/Post.module.scss";

export default function Post() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <UnstyledButton>
          <Image
            src="/Images/profile_logo.jpeg"
            className={styles.profileImage}
          />
        </UnstyledButton>
        <div className={styles.profileContent}>
          <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
          <div className={styles.profileDate}>1 Jan 2024</div>
        </div>
      </div>
      <Spoiler
        showLabel="Show more"
        hideLabel="Hide"
        maxHeight={125}
        padding={20}
        className={styles.text}
      >
        I'm baby occupy meditation authentic PBR&B prism, banjo etsy normcore
        sartorial franzen umami subway tile. Disrupt wayfarers lo-fi, bruh art
        party photo booth tilde man bun. Cred crucifix af mustache, direct trade
        tofu kombucha praxis. Freegan chartreuse enamel pin master cleanse bruh,
        kickstarter microdosing you probably haven't heard of them vexillologist
        migas franzen unicorn DIY kinfolk. Tilde hoodie pug microdosing squid
        PBR&B 90's. Yes plz skateboard poke enamel pin kitsch bushwick.
        Meditation franzen kale chips, art party YOLO artisan seitan sustainable
        stumptown yr banh mi Venmo letterpress coloring book, vice chartreuse
        tattooed umami literally forage JOMO direct trade helvetica ennui cray
        taiyaki. Williamsburg jianbing pork belly hella. Put a bird on it banjo
        raw denim, 90's semiotics echo park cornhole keffiyeh tattooed JOMO
        slow-carb pork belly try-hard kickstarter ugh. Dreamcatcher sustainable
        copper mug, hell of retro quinoa same VHS selvage chambray. Church-key
        vaporware lo-fi sus vice kinfolk schlitz art party skateboard tacos
        vape. Activated charcoal thundercats retro salvia green juice paleo
        irony vape vinyl affogato fingerstache mustache polaroid neutra.
        Coloring book organic tumeric jean shorts deep v aesthetic pok pok
        everyday carry, food truck paleo gochujang shabby chic wayfarers before
        they sold out.
      </Spoiler>
      <Image className={styles.postImage} src="/Images/post1_image.png"></Image>
      <PostInteraction></PostInteraction>
      <div className={styles.commentContainer}>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
        <TextInput
          className={styles.commentInput}
          placeholder="Add Comment"
          radius={"30px"}
          color="#eeeeee"
        />
      </div>
    </div>
  );
}
