import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "../scss/SubscriptionPage.module.scss";
import { Image, rem, UnstyledButton } from "@mantine/core";
export default function SubscriptionPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.packageContainer}>
        <div className={styles.header}>BASIC</div>
        <div className={styles.content}>
          <div className={styles.feature}>
            <div>
              Add Friends
              <Image
                src="/Images/correct_logo.svg"
                style={{ width: rem(36) }}></Image>
            </div>
            <div>
              Search Filter
              <Image
                src="/Images/wrong_logo.svg"
                style={{ width: rem(36) }}></Image>
            </div>
            <div>
              Body Analyzer
              <Image
                src="/Images/wrong_logo.svg"
                style={{ width: rem(36) }}></Image>
            </div>
            <div>
              Event initializer for organization
              <Image
                src="/Images/wrong_logo.svg"
                style={{ width: rem(36) }}></Image>
            </div>
          </div>
          <div className={styles.priceContainer}>
            <div className={styles.price}>0 ฿ </div>
            /month
          </div>
          <UnstyledButton className={styles.current}>CURRENT</UnstyledButton>
        </div>
      </div>
      <div className={styles.packageContainer}>
        <div className={styles.header}>PROFESSIONAL</div>
        <div className={styles.content}>
          <div className={styles.feature}>
            <div>
              Add Friends
              <Image
                src="/Images/correct_logo.svg"
                style={{ width: rem(36) }}></Image>
            </div>
            <div>
              Search Filter
              <Image
                src="/Images/correct_logo.svg"
                style={{ width: rem(36) }}></Image>
            </div>
            <div>
              Body Analyzer
              <Image
                src="/Images/correct_logo.svg"
                style={{ width: rem(36) }}></Image>
            </div>
            <div>
              Event initializer for organization
              <Image
                src="/Images/correct_logo.svg"
                style={{ width: rem(36) }}></Image>
            </div>
          </div>
          <div className={styles.priceContainer}>
            <div className={styles.price}>200 ฿ </div>
            /month
          </div>
          <UnstyledButton
            onClick={() => {
              navigate("/checkout");
            }}
            className={styles.notCurrent}>
            SELECT
          </UnstyledButton>
        </div>
      </div>
    </div>
  );
}
