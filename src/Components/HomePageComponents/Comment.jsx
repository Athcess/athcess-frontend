import React from "react";
import { Image, UnstyledButton, Spoiler } from "@mantine/core";
import styles from "../../scss/HomePageComponents/Comment.module.scss";
export default function Comment() {
  return (
    <div className={styles.container}>
      <UnstyledButton>
        <Image src="/Images/profile_logo.jpeg" className={styles.image} />
      </UnstyledButton>
      <div className={styles.content}>
        <div className={styles.name}>วี่หว่อง หว่องวี่</div>
        <Spoiler
          showLabel="Show more"
          hideLabel="Hide"
          maxHeight={125}
          padding={20}
          className={styles.comment}
        >
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
      </div>
    </div>
  );
}
