import React, { useEffect, useState } from "react";
import styles from "../scss/BodyAnalyzer.module.scss";
import CustomRadar from "../Components/CustomRadar";
import {
  Image,
  rem,
  Modal,
  UnstyledButton,
  Button,
  Group,
  Text,
  Paper,
  Select,
  NumberInput,
  TextInput,
  Loader,
} from "@mantine/core";
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
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getPhyAtt,
  postPhyAttVid,
  postPhyStats,
  putPhyStats,
} from "../Services/HomeAPI";
import { set } from "react-hook-form";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BodyAnalyzerPage({ user }) {
  const form = useForm({
    initialValues: {
      phyStat: {
        height: null,
        weight: null,
        fat_mass: null,
        muscle_mass: null,
      },
      pushup: {
        file_name: null,
        content_type: null,
        file_size: null,
        username: user.username,
        file: null,
        physical_attribute_type: "push_up",
        height: null,
      },
      situp: {
        file_name: null,
        content_type: null,
        file_size: null,
        username: user.username,
        file: null,
        physical_attribute_type: "sit_up",
        height: null,
      },
      running: {
        file_name: null,
        content_type: null,
        file_size: null,
        username: user.username,
        file: null,
        physical_attribute_type: "run",
        height: null,
      },
    },
  });
  const [PhyAttOpened, PhyAtt] = useDisclosure(false);
  const [PerfVidOpened, PerfVid] = useDisclosure(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    labels: ["Running", "Pushup", "Situp"],
    amounts: [0, 0, 0],
  });

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

  const handleHeightChange = (newHeight) => {
    // Update the height value in all required fields
    form.setFieldValue("phyStat.height", newHeight);
    form.setFieldValue("pushup.height", newHeight);
    form.setFieldValue("situp.height", newHeight);
    form.setFieldValue("running.height", newHeight);
  };

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
        height: form.values[fieldName].height,
      });
    };
  };
  const queryPhyAtt = useQuery({
    queryKey: ["phyAtt"],
    queryFn: getPhyAtt,
  });

  const mutationPhyStat = useMutation({
    mutationFn: postPhyStats,
    onSuccess: () => {
      console.log("Physical Stats posted successfully");
    },
  });

  const mutationPushup = useMutation({
    mutationFn: postPhyAttVid,
    onSuccess: () => {
      console.log("Push-up video uploaded successfully");
    },
  });
  const mutationSitup = useMutation({
    mutationFn: postPhyAttVid,
    onSuccess: () => {
      console.log("Sit-up video uploaded successfully");
    },
  });

  const mutationRunning = useMutation({
    mutationFn: postPhyAttVid,
    onSuccess: () => {
      console.log("Running video uploaded successfully");
    },
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(form.values);
    // Check if any videos are missing
    if (
      !form.values.pushup.file_name ||
      !form.values.situp.file_name ||
      !form.values.running.file_name
    ) {
      alert("Please upload all required videos");
      return;
    }

    const phyStatPromise = mutationPhyStat.mutateAsync(form.values.phyStat);
    const pushupPromise = mutationPushup.mutateAsync(form.values.pushup);
    const situpPromise = mutationSitup.mutateAsync(form.values.situp);
    const runningPromise = mutationRunning.mutateAsync(form.values.running);

    // Use Promise.all to wait for all mutations to complete
    const [pushupResponse, situpResponse, runningResponse] = await Promise.all([
      phyStatPromise,
      pushupPromise,
      situpPromise,
      runningPromise,
    ]);

    // Here you can use the data from the responses to update the chart data
    // For example:
    const updatedAmounts = [
      runningResponse.run, // Update running amount
      pushupResponse.push_up, // Update pushup amount
      situpResponse.sit_up, // Update situp amount
    ];

    queryPhyAtt.refetch();

    console.log(updatedAmounts);
    setIsLoading(false);
  };

  useEffect(() => {
    if (queryPhyAtt.data) {
      let finalPushupData;
      let finalSitupData;
      let finalRunningData;
      // Extracting the latest data for pushup, situp, and running
      const pushupDataList = queryPhyAtt.data.filter(
        (item) => item.push_up !== null && item.username == user.username
      );
      if (pushupDataList.length != 0) {
        finalPushupData = pushupDataList[pushupDataList.length - 1].push_up;
      } else {
        finalPushupData = 0;
      }

      const situpDataList = queryPhyAtt.data.filter(
        (item) => item.sit_up !== null && item.username == user.username
      );
      if (situpDataList.length != 0) {
        finalSitupData = situpDataList[situpDataList.length - 1].sit_up;
      } else {
        finalSitupData = 0;
      }

      const runningDataList = queryPhyAtt.data.filter(
        (item) => item.run !== null && item.username == user.username
      );
      if (runningDataList.length != 0) {
        finalRunningData = runningDataList[runningDataList.length - 1].run;
      } else {
        finalRunningData = 0;
      }
      // Update the state with the new data
      setData({
        labels: ["Running", "Pushup", "Situp"],
        amounts: [finalRunningData, finalPushupData, finalSitupData],
      });

      // Logging the extracted data
      console.log(finalPushupData, finalSitupData, finalRunningData);
    } else {
      setData({
        labels: ["Running", "Pushup", "Situp"],
        amounts: [0, 0, 0],
      });
    }
  }, [queryPhyAtt.data, setData]);

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
          {isLoading ? (
            <div className={styles.loader}>
              <Loader color="green" size="xl" />
            </div>
          ) : (
            <div className={styles.phyAttContent}>
              <div className={styles.radar}>
                <CustomRadar data={radarData}></CustomRadar>
              </div>
              <div className={styles.bar}>
                <Bar data={barData} options={options}></Bar>
              </div>
            </div>
          )}
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
          <form onSubmit={handleFormSubmit}>
            <div className={styles.form}>
              <div className={styles.phyStatContainer}>
                <Group gap={9}>
                  <NumberInput
                    w="24%"
                    required
                    label="Height (cm)"
                    placeholder="Enter your height"
                    value={form.values.height}
                    onChange={(event) =>
                      form.setFieldValue(handleHeightChange(event))
                    }
                    radius="md"
                  />
                  <NumberInput
                    w="24%"
                    required
                    label="Weight (kg)"
                    placeholder="Enter your weight"
                    value={form.values.weight}
                    onChange={(event) =>
                      form.setFieldValue("phyStat.weight", event)
                    }
                    radius="md"
                  />
                  <NumberInput
                    w="24%"
                    required
                    label="Fat Mass (kg)"
                    placeholder="Enter your fat mass"
                    value={form.values.fat_mass}
                    onChange={(event) =>
                      form.setFieldValue("phyStat.fat_mass", event)
                    }
                    radius="md"
                  />
                  <NumberInput
                    w="24%"
                    required
                    label="Body Mass (kg)"
                    placeholder="Enter your muscle mass"
                    value={form.values.muscle_mass}
                    onChange={(event) =>
                      form.setFieldValue("phyStat.muscle_mass", event)
                    }
                    radius="md"
                  />
                </Group>
              </div>
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
                  style={{ width: "100%" }}>
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
