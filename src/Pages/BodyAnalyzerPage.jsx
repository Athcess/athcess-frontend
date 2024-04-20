import React, { useState } from "react";
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
import {
  PhyAttModal,
  PerfVidModal,
} from "../Components/BodyAnalyzerComponents/InfoModal";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BodyAnalyzerPage() {
  const [PhyAttOpened, PhyAtt] = useDisclosure(false);
  const [PerfVidOpened, PerfVid] = useDisclosure(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = async (event, exerciseType) => {
    const file = event.target.files[0];

    // Create FormData object to send file data and exercise type
    const formData = new FormData();
    formData.append("video", file);
    formData.append("exerciseType", exerciseType);
    console.log(formData.get("video"));

    // try {
    //   // Send POST request to the API endpoint
    //   const response = await fetch("your-api-endpoint-url", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     // Video uploaded successfully
    //     console.log("Video uploaded successfully");
    //   } else {
    //     // Handle error response from the server
    //     console.error("Failed to upload video");
    //   }
    // } catch (error) {
    //   // Handle network errors or other exceptions
    //   console.error("Error uploading video:", error);
    // }
  };

  const data = {
    labels: ["Running", "Pushup", "Situp"],
    amounts: [3, 6, 9],
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
      <PhyAttModal opened={PhyAttOpened} onClose={PhyAtt.close} />
      <PerfVidModal opened={PerfVidOpened} onClose={PerfVid.close} />
      <div className={styles.container}>
        <div className={styles.phyAttContainer}>
          <div className={styles.header}>
            Physical Attributes
            <UnstyledButton onClick={PhyAtt.open}>
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
            Physical Stats & Performance Videos
            <UnstyledButton onClick={PerfVid.open}>
              <Image
                src="/Images/info_logo.png"
                style={{ width: rem(16), height: rem(16) }}></Image>
            </UnstyledButton>
          </div>
          <div className={styles.perfVidContent}>
            <div className={styles.vidContainer}>
              <UnstyledButton className={styles.selectVid}>
                <label htmlFor="pushup">
                  <Image
                    src="/Images/image_placeholder.png"
                    style={{ width: rem(64) }}
                  />
                  Select a video to upload
                </label>
                <input
                  id="pushup"
                  type="file"
                  accept="video/*"
                  style={{ display: "none" }}
                  onChange={(event) => handleFileChange(event, "pushup")}
                />
              </UnstyledButton>
              Push-up
            </div>
            <div className={styles.vidContainer}>
              <UnstyledButton className={styles.selectVid}>
                <label htmlFor="pullup">
                  <Image
                    src="/Images/image_placeholder.png"
                    style={{ width: rem(64) }}
                  />
                  Select a video to upload
                </label>
                <input
                  id="pullup"
                  type="file"
                  accept="video/*"
                  style={{ display: "none" }}
                  onChange={(event) => handleFileChange(event, "pullup")}
                />
              </UnstyledButton>
              Pull-up
            </div>
            <div className={styles.vidContainer}>
              <UnstyledButton className={styles.selectVid}>
                <label htmlFor="running">
                  <Image
                    src="/Images/image_placeholder.png"
                    style={{ width: rem(64) }}
                  />
                  Select a video to upload
                </label>
                <input
                  id="running"
                  type="file"
                  accept="video/*"
                  style={{ display: "none" }}
                  onChange={(event) => handleFileChange(event, "running")}
                />
              </UnstyledButton>
              Running
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
