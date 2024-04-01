import React from "react";
import styles from "../scss/BodyAnalyzer.module.scss";
import CustomRadar from "../Components/CustomRadar";
import { Image, rem, Modal, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BodyAnalyzerPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const data = {
    labels: [
      "Strength",
      "Endurance",
      "Flexibility",
      "Speed",
      "Balance",
      "Power",
    ],
    amounts: [3, 6, 9, 12, 15, 18],
  };
  const radarData = {
    labels: data.labels,
    datasets: [
      {
        label: "Physical Attributes",
        data: data.amounts,
        fill: true,
        radius: 1,
        backgroundColor: "green",
        borderColor: "green",
        pointBackgroundColor: "green",
        pointBorderColor: "green",
        pointHoverBackgroundColor: "green",
        pointHoverBorderColor: "green",
      },
    ],
  };
  const barData = {
    labels: data.labels,
    datasets: [
      {
        label: "Physical Attributes",
        data: data.amounts,
        backgroundColor: "green",
      },
    ],
  };
  const options = { indexAxis: "y" };
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Physical Attributes"
        centered></Modal>
      <div className={styles.container}>
        <div className={styles.phyAttContainer}>
          <div className={styles.header}>
            Physical Attributes
            <UnstyledButton onClick={open}>
              <Image
                src="/Images/info_logo.png"
                style={{ width: rem(16), height: rem(16) }}></Image>
            </UnstyledButton>
          </div>
          <div className={styles.phyAttContent}>
            <div className={styles.radar}>
              <CustomRadar data={radarData}></CustomRadar>
            </div>
            <div className={styles.bar}>
              <Bar data={barData} options={options}></Bar>
            </div>
          </div>
        </div>
        <div className={styles.perfVidContainer}>
          <div className={styles.header}>
            Performance Videos
            <UnstyledButton onClick={open}>
              <Image
                src="/Images/info_logo.png"
                style={{ width: rem(16), height: rem(16) }}></Image>
            </UnstyledButton>
          </div>
          <div className={styles.perfVidContent}>
            <UnstyledButton className={styles.selectVid}>
              <Image
                src="/Images/image_placeholder.png"
                style={{ width: rem(64) }}></Image>
              Select a video to upload
            </UnstyledButton>
            <UnstyledButton className={styles.selectVid}>
              <Image
                src="/Images/image_placeholder.png"
                style={{ width: rem(64) }}></Image>
              Select a video to upload
            </UnstyledButton>
            <UnstyledButton className={styles.selectVid}>
              <Image
                src="/Images/image_placeholder.png"
                style={{ width: rem(64) }}></Image>
              Select a video to upload
            </UnstyledButton>
            <UnstyledButton className={styles.selectVid}>
              <Image
                src="/Images/image_placeholder.png"
                style={{ width: rem(64) }}></Image>
              Select a video to upload
            </UnstyledButton>
          </div>
        </div>
      </div>
    </>
  );
}
