import React, { useState, useEffect } from "react";
import {
  Image,
  UnstyledButton,
  Button,
  SegmentedControl,
  Select,
  Group,
  Divider,
  Fieldset,
  rem,
  Textarea,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import styles from "../../scss/SearchPageComponents/Filter.module.scss";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFilterSearch, postSearch } from "../../Services/HomeAPI";
import { useParams } from "react-router";

export function Filter({ category, user, id, setId }) {
  const navigate = useNavigate();
  let { tosearch } = useParams();
  const queryClient = useQueryClient();
  const form = useForm({
    initialValues: {
      height: "",
      weight: "",
      age: "",
      location: "",
      position: "",
      sit_up: "",
      push_up: "",
      run: "",
    },
  });

  const mutation = useMutation({
    mutationFn: postFilterSearch,
    onSuccess: (data) => {
        setId(data.data.search_id)
        queryClient.invalidateQueries({ queryKey: ["search", id]})
    },
  });


  const go = (e) => {
    e.preventDefault();
    mutation.mutate(form.values);
    console.log(form.values);
  };
  return (
    <>
      {category === "athlete" && user.role === "scout" && (
        <>
          <Fieldset disabled={!user.teir} variant="unstyled">
            <Group className={styles.container}>
              <NumberInput
                classNames={{ input: styles.input }}
                placeholder="Height"
                data={[
                  "<160",
                  "160-165",
                  "165-170",
                  "170-175",
                  "175-180",
                  ">180",
                ]}
                onChange={(event) => form.setFieldValue("height", event)}
                w={190}
                clearable
              />
              <NumberInput
                classNames={{ input: styles.input }}
                placeholder="Weight"
                data={["<50", "50-60", "60-70", "70-80", ">80"]}
                onChange={(event) => form.setFieldValue("weight", event)}
                w={190}
                clearable
              />
              <NumberInput
                classNames={{ input: styles.input }}
                placeholder="Age"
                data={["<12", "12-15", "15-18", "18-21", ">21"]}
                onChange={(event) => form.setFieldValue("age", event)}
                w={190}
                clearable
              />
              <Select
                classNames={{ input: styles.input }}
                placeholder="Location"
                data={[
                  "Amnat Charoen",
                  "Ang Thong",
                  "Bangkok",
                  "Bueng Kan",
                  "Buri Ram",
                  "Chachoengsao",
                  "Chai Nat",
                  "Chaiyaphum",
                  "Chanthaburi",
                  "Chiang Mai",
                  "Chiang Rai",
                  "Chon Buri",
                  "Chumphon",
                  "Kalasin",
                  "Kamphaeng Phet",
                  "Kanchanaburi",
                  "Khon Kaen",
                  "Krabi",
                  "Lampang",
                  "Lamphun",
                  "Loei",
                  "Lop Buri",
                  "Mae Hong Son",
                  "Maha Sarakham",
                  "Mukdahan",
                  "Nakhon Nayok",
                  "Nakhon Pathom",
                  "Nakhon Phanom",
                  "Nakhon Ratchasima",
                  "Nakhon Sawan",
                  "Nakhon Si Thammarat",
                  "Nan",
                  "Narathiwat",
                  "Nong Bua Lamphu",
                  "Nong Khai",
                  "Nonthaburi",
                  "Pathum Thani",
                  "Pattani",
                  "Phang Nga",
                  "Phatthalung",
                  "Phayao",
                  "Phetchabun",
                  "Phetchaburi",
                  "Phichit",
                  "Phitsanulok",
                  "Phra Nakhon Si Ayutthaya",
                  "Phrae",
                  "Phuket",
                  "Prachin Buri",
                  "Prachuap Khiri Khan",
                  "Ranong",
                  "Ratchaburi",
                  "Rayong",
                  "Roi Et",
                  "Sa Kaeo",
                  "Sakon Nakhon",
                  "Samut Prakan",
                  "Samut Sakhon",
                  "Samut Songkhram",
                  "Saraburi",
                  "Satun",
                  "Sing Buri",
                  "Sisaket",
                  "Songkhla",
                  "Sukhothai",
                  "Suphan Buri",
                  "Surat Thani",
                  "Surin",
                  "Tak",
                  "Trang",
                  "Trat",
                  "Ubon Ratchathani",
                  "Udon Thani",
                  "Uthai Thani",
                  "Uttaradit",
                  "Yala",
                  "Yasothon",
                ]}
                onChange={(event) => form.setFieldValue("location", event)}
                w={190}
                clearable
              />
              <NumberInput
                classNames={{ input: styles.input }}
                placeholder="Sit-up"
                data={["<20", "20-30", "30-40", ">40"]}
                onChange={(event) => form.setFieldValue("sit_up", event)}
                w={190}
                clearable
              />

              <NumberInput
                classNames={{ input: styles.input }}
                placeholder="Push-up"
                //data={["<20", "20-30", "30-40", ">40"]}
                onChange={(event) => form.setFieldValue("push_up", event)}
                w={190}
                clearable
              />

              <Textarea
              autosize
                classNames={{ input: styles.input }}
                placeholder="Run"
                //data={["<5m/s", "5-10m/s", "10-15m/s", ">15m/s"]}
                onChange={(event) => form.setFieldValue("run", event.currentTarget.value)}
                w={190}
                clearable
              />

              <Select
                classNames={{ input: styles.input }}
                placeholder="Position"
                data={[
                  { value: "GK", label: "Goalkeeper" },
                  { value: "CB", label: "Center Back" },
                  { value: "LB", label: "Left Back" },
                  { value: "RB", label: "Right Back" },
                  { value: "CM", label: "Center Midfield" },
                  { value: "LM", label: "Left Midfield" },
                  { value: "RM", label: "Right Midfield" },
                  { value: "CAM", label: "Center Attacking Midfield" },
                  { value: "LW", label: "Left Wing" },
                  { value: "RW", label: "Right Wing" },
                  { value: "ST", label: "Striker" },
                ]}
                onChange={(event) => form.setFieldValue("position", event)}
                w={190}
                clearable
              />
     
              <Divider orientation="vertical" />
              <Button color="#00A67E" onClick={go} w={160}>
                Go
              </Button>
            </Group>
          </Fieldset>
          {!user.teir && category === "athlete" && (
            <UnstyledButton onClick={() => navigate("/subscription")}>
              <Image
                src="../../../public/Images/Lock_fill.png"
                style={{ width: rem(50), height: rem(50) }}
              />
            </UnstyledButton>
          )}
        </>
      )}
    </>
  );
}
