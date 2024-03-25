import React, { useState } from "react";
import {
  Image,
  UnstyledButton,
  Button,
  SegmentedControl,
  Select,
  Group,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import styles from "../../scss/SearchPageComponents/Filter.module.scss";

export function Filter({ category }) {
  const form = useForm({
    initialValues: {
      type: "",
      date: "",
      sort: "",
      organization: "",
      bodyFitness: "",
      age: "",
      location: "",
    },
  });
  const go = (e) => {
    e.preventDefault();
    console.log(form.values);
  };
  return (
    <form onSubmit={go}>
      <Group className={styles.container}>
        {category === "post" && (
          <>
            <Select
              classNames={{ input: styles.input }}
              placeholder="Sort by"
              data={["Newest", "Most Liked", "Most Commented", "Most Relevent"]}
              onChange={(event) => form.setFieldValue("sort", event)}
              clearable
            />
            <Select
              classNames={{ input: styles.input }}
              placeholder="Date Posted"
              data={[
                "Last 24 Hours",
                "Last 7 Days",
                "Last 30 Days",
                "All Time",
              ]}
              onChange={(event) => form.setFieldValue("date", event)}
              clearable
            />
            <Select
              classNames={{ input: styles.input }}
              placeholder="Content Type"
              data={["A", "B", "C"]}
              onChange={(event) => form.setFieldValue("type", event)}
              clearable
            />
          </>
        )}
        {category === "athlete" && (
          <>
            <Select
              classNames={{ input: styles.input }}
              placeholder="Body Fitness"
              data={["A", "B", "C"]}
              onChange={(event) => form.setFieldValue("bodyFitness", event)}
              clearable
            />
            <Select
              classNames={{ input: styles.input }}
              placeholder="Age"
              data={["<12", "12-15", "15-18", "18-21", ">21"]}
              onChange={(event) => form.setFieldValue("age", event)}
              w={100}
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
              clearable
            />
            <Select
              classNames={{ input: styles.input }}
              placeholder="Sports"
              data={["Football", "Basketball", "Others"]}
              onChange={(event) => form.setFieldValue("sports", event)}
              clearable
            />
          </>
        )}
        {category === "event" && (
          <>
            <Select
              classNames={{ input: styles.input }}
              placeholder="Sort by"
              data={["Newest", "Most Liked", "Most Commented", "Most Relevant"]}
              onChange={(event) => form.setFieldValue("sort", event)}
              clearable
            />
            <Select
              classNames={{ input: styles.input }}
              placeholder="Sports"
              data={["Football", "Basketball", "Others"]}
              onChange={(event) => form.setFieldValue("sports", event)}
              clearable
            />
            <Select
              classNames={{ input: styles.input }}
              placeholder="Date Posted"
              data={[
                "Last 24 Hours",
                "Last 7 Days",
                "Last 30 Days",
                "All Time",
              ]}
              onChange={(event) => form.setFieldValue("date", event)}
              clearable
            />
            <Select
              classNames={{ input: styles.input }}
              placeholder="Organization"
              data={["Organization A", "Organization B", "Organization C"]}
              onChange={(event) => form.setFieldValue("organization", event)}
              clearable
            />
          </>
        )}
        <Divider orientation="vertical" />
        <Button color="#007458">All Filter</Button>
        <Divider orientation="vertical" />
        <Button color="#00A67E" type="submit" >
          Go
        </Button>
      </Group>
    </form>
  );
}
