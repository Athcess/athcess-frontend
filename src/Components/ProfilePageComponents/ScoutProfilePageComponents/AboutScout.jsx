import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { UnstyledButton, rem, Image, Spoiler } from "@mantine/core";
import BackgroundElement from "../BackgroundElement";
import AchievementElement from "../AchievementElement";
import styles from "../../../scss/ProfilePageComponents/AthleteProfilePageComponents/AboutAthlete.module.scss";
import EditBackgroundModal from "../EditBackgroundModal";
import EditAchievementModal from "../EditAchievementModal";
import { useDisclosure } from "@mantine/hooks";
import Cookies from "js-cookie"
import { useQuery } from "@tanstack/react-query";
import { profileAthlete } from "../../../Services/ProfileAPI";
export default function AboutScout() {
  const auth_username = Cookies.get("auth_username");
  const [Backgroundopened, Background] = useDisclosure(false);
  const [Achievementopened, Achievement] = useDisclosure(false);
  let {username} = useParams()
  const query = useQuery({ queryKey: ["profile", username], queryFn: () => profileAthlete(username) });
  if (query.status === "success") {
    const Achievements = query.data.data.achievements;
    const Backgrounds = query.data.data.experiences;
    return (
      <div className={styles.container}>
        <EditBackgroundModal
          opened={Backgroundopened}
          onClose={Background.close}
          Backgrounds={Backgrounds}
        />
        <EditAchievementModal
          opened={Achievementopened}
          onClose={Achievement.close}
          Achievements={Achievements}
        />
        <div className={styles.header}>
          <NavLink className={styles.link} to={`/scoutprofile/${username}`}>
            <UnstyledButton>About</UnstyledButton>
          </NavLink>
          <NavLink className={styles.link} to={`/scoutprofile/${username}/post`}>
            <UnstyledButton>Post</UnstyledButton>
          </NavLink>
        </div>
        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                Background
                {username === auth_username && (
                <UnstyledButton
                  className={styles.edit}
                  onClick={Background.open}
                >
                  <Image
                    src="/Images/ProfilePage/editSection_logo.png"
                    style={{ width: rem(48) }}
                  ></Image>
                </UnstyledButton>
                )}
              </div>
              <div className={styles.backgroundContent}>
                {Backgrounds?.map((e) => {
                  return (
                    <>
                      <BackgroundElement
                        key={e.experience_id}
                        data={e}
                      ></BackgroundElement>
                    </>
                  );
                })}
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                Achievement
                {username === auth_username && (
                <UnstyledButton
                  className={styles.edit}
                  onClick={Achievement.open}
                >
                  <Image
                    src="/Images/ProfilePage/editSection_logo.png"
                    style={{ width: rem(48) }}
                  ></Image>
                </UnstyledButton>
                )}
              </div>
              <div className={styles.achievementContent}>
                {Achievements?.map((e) => {
                  return (
                    <>
                      <AchievementElement
                        key={e.ahievement_id}
                        data={e}
                      ></AchievementElement>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
