import React, { useState } from "react";
import styles from "../scss/BodyAnalyzer.module.scss";
import CustomRadar from "../Components/CustomRadar";
import { Image, rem, Modal, UnstyledButton, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
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
import { useMutation } from "@tanstack/react-query";
import { postPhyAttVid } from "../Services/HomeAPI";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BodyAnalyzerPage({ user }) {
  const form = useForm({
    initialValues: {
      pushup: {
        file_name: null,
        content_type: null,
        file_size: null,
        username: user.username,
        file: null,
        physical_attribute_type: "push_up",
      },
      situp: {
        file_name: null,
        content_type: null,
        file_size: null,
        username: user.username,
        file: null,
        physical_attribute_type: "sit_up",
      },
      running: {
        file_name: null,
        content_type: null,
        file_size: null,
        username: user.username,
        file: null,
        physical_attribute_type: "run",
      },
    },
  });
  const [PhyAttOpened, PhyAtt] = useDisclosure(false);
  const [PerfVidOpened, PerfVid] = useDisclosure(false);
  const [selectedFile, setSelectedFile] = useState(null);

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

  const handleFileChange = (fieldName) => (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      const binaryFile = reader.result;
      form.setFieldValue(fieldName, {
        file_name: file.name,
        content_type: file.type,
        file_size: file.size,
        file: binaryFile,
        username: user.username,
        physical_attribute_type: form.values[fieldName].physical_attribute_type,
      });
    };

    // Update the form values with the file information
  };
  const mutationPushup = useMutation({
    mutationFn: postPhyAttVid,
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const post = (e) => {
    e.preventDefault();
    console.log(form.values);
    if (
      form.values.pushup.file_name == null ||
      form.values.situp.file_name == null ||
      form.values.running.file_name == null
    ) {
      alert("Please upload all required videos");
    } else {
      mutationPushup.mutate({
        file_name: form.values.pushup.file_name,
        content_type: form.values.pushup.content_type,
        file_size: form.values.pushup.file_size,
        file: form.values.pushup.file,
        username: user.username,
      });
    }
  };
  console.log(user);
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
            Performance Videos
            <UnstyledButton onClick={PerfVid.open}>
              <Image
                src="/Images/info_logo.png"
                style={{ width: rem(16), height: rem(16) }}></Image>
            </UnstyledButton>
          </div>
          <form onSubmit={post} className={styles.form}>
            <div className={styles.perfVidContent}>
              <div className={styles.vidContainer}>
                <UnstyledButton className={styles.selectVid}>
                  <label htmlFor="pushup">
                    <Image
                      src="/Images/image_placeholder.png"
                      style={{ width: rem(64) }}
                    />
                    {form.values.pushup.file_name
                      ? "Successfully Uploaded"
                      : "Select a video to upload"}
                  </label>
                  <input
                    id="pushup"
                    type="file"
                    accept="video/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange("pushup")}
                  />
                </UnstyledButton>
                Push-up
              </div>
              <div className={styles.vidContainer}>
                <UnstyledButton className={styles.selectVid}>
                  <label htmlFor="situp">
                    <Image
                      src="/Images/image_placeholder.png"
                      style={{ width: rem(64) }}
                    />
                    {form.values.situp.file_name
                      ? "Successfully Uploaded"
                      : "Select a video to upload"}
                  </label>

                  <input
                    id="situp"
                    type="file"
                    accept="video/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange("situp")}
                  />
                </UnstyledButton>
                Sit-Up
              </div>
              <div className={styles.vidContainer}>
                <UnstyledButton className={styles.selectVid}>
                  <label htmlFor="running">
                    <Image
                      src="/Images/image_placeholder.png"
                      style={{ width: rem(64) }}
                    />
                    {form.values.running.file_name
                      ? "Successfully Uploaded"
                      : "Select a video to upload"}
                  </label>
                  <input
                    id="running"
                    type="file"
                    accept="video/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange("running")}
                  />
                </UnstyledButton>
                Running
              </div>
              <Button
                fullWidth
                color="#00A67E"
                type="submit"
                style={{ width: "300px" }}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
