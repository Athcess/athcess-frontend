import React, { useState, useEffect } from "react";
import { Image, UnstyledButton, Spoiler } from "@mantine/core";
import { rem } from "@mantine/core";
import { Verified, UEvent } from "../Status";
import styles from "../../scss/ProfilePageComponents/ProfileElement.module.scss";
export default function ProfileElement({ type, openModal }) {
  const [profileImageSrc, setProfileImageSrc] = useState("");
  useEffect(() => {
    if (type === "athlete") {
      setProfileImageSrc("/Images/ProfilePage/athlete_logo.png");
    } else if (type === "scout") {
      setProfileImageSrc("/Images/ProfilePage/scout_logo.png");
    } else if (type === "org") {
      setProfileImageSrc("/Images/ProfilePage/org_logo.png");
    }
  }, []);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.wallpaper}>
        <Image
          className={styles.wallpaperImage}
          src="/Images/ProfilePage/wallpaper.jpg"></Image>
      </div>
      <div className={styles.profileContent}>
        <div className={styles.profileImage}>
          <Image
            className={styles.image}
            src="/Images/profile_logo.jpeg"
            style={{ width: rem(150), border: "4px solid white" }}></Image>
          <UnstyledButton className={styles.edit} onClick={openModal}>
            <Image
              src="/Images/ProfilePage/editSection_logo.png"
              style={{ width: rem(48) }}></Image>
          </UnstyledButton>
        </div>
        <div className={styles.profileName}>
          <div className={styles.name}>Daniel Thompson , 21</div>
          <Image src={profileImageSrc} style={{ width: rem(32) }}></Image>
          <UnstyledButton className={styles.friend}>Friend (2)</UnstyledButton>
        </div>
        <div className={styles.profileInfo}>
          2008, Height: 180 cm, Weight: 68 kg, Sex: Male
        </div>
        <div className={styles.profileLocation}>
          <Image
            src="/Images/ProfilePage/pin_logo.png"
            style={{ width: rem(24) }}></Image>
          Bangkok, Thailand
        </div>
        <Spoiler
          showLabel="Show more"
          hideLabel="Hide"
          maxHeight={125}
          padding={20}
          className={styles.profileBio}>
          Bio: I'm baby occupy meditation authentic PBR&B prism, banjo etsy
          normcore sartorial franzen umami subway tile. Disrupt wayfarers lo-fi,
          bruh art party photo booth tilde man bun. Cred crucifix af mustache,
          direct trade tofu kombucha praxis. Freegan chartreuse enamel pin
          master cleanse bruh, kickstarter microdosing you probably haven't
          heard of them vexillologist migas franzen unicorn DIY kinfolk. Tilde
          hoodie pug microdosing squid PBR&B 90's. Yes plz skateboard poke
          enamel pin kitsch bushwick. Meditation franzen kale chips, art party
          YOLO artisan seitan sustainable stumptown yr banh mi Venmo letterpress
          coloring book, vice chartreuse tattooed umami literally forage JOMO
          direct trade helvetica ennui cray taiyaki. Williamsburg jianbing pork
          belly hella. Put a bird on it banjo raw denim, 90's semiotics echo
          park cornhole keffiyeh tattooed JOMO slow-carb pork belly try-hard
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
