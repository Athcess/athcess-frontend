import React, { useState } from "react";
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
} from "@mantine/core";
import { useForm } from "@mantine/form";
import styles from "../../scss/SearchPageComponents/Filter.module.scss";
import { useNavigate } from "react-router";
import { useMutation }from "@tanstack/react-query"
import { postSearch } from "../../Services/HomeAPI";
import { useParams } from "react-router";

export function Filter({ category, user }) {
  const navigate = useNavigate()
  let { tosearch } = useParams();
  const form = useForm({
    initialValues: {
      type: category,
      keyword: tosearch,
      contenttype: "",
      date: "",
      sort: "",
      organization: "",
      height: "",
      weight: "",
      age: "",
      location: "",
      sports:"",
    },
  });

  // const mutation = useMutation({
  //   mutationFn: postSearch,
  //   onSuccess: (data) => {
  //     console.log(data)
  //   },
  // });

  const go = (e) => {
    e.preventDefault();
    //mutation.mutate(form.values);
    console.log(form.values);
  };
  return (
    <form onSubmit={go}>
      <Fieldset disabled={!user.teir} variant="unstyled">
        <Group className={styles.container}>
          {category === "post" && (
            <>
              <Select
                classNames={{ input: styles.input }}
                placeholder="Sort by"
                data={[
                  "Newest",
                  "Most Liked",
                  "Most Commented",
                  "Most Relevent",
                ]}
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
                data={["Image", "Video"]}
                onChange={(event) => form.setFieldValue("contenttype", event)}
                clearable
              />
            </>
          )}
          {category === "athlete" && (
            <>
              <Select
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
                w={130}
                clearable
              />
              <Select
                classNames={{ input: styles.input }}
                placeholder="Weight"
                data={["<50", "50-60", "60-70", "70-80", ">80"]}
                onChange={(event) => form.setFieldValue("weight", event)}
                w={130}
                clearable
              />
              <Select
                classNames={{ input: styles.input }}
                placeholder="Age"
                data={["<12", "12-15", "15-18", "18-21", ">21"]}
                onChange={(event) => form.setFieldValue("age", event)}
                w={130}
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
                w={150}
                clearable
              />
              <Select
                classNames={{ input: styles.input }}
                placeholder="Sports"
                data={["Football", "Basketball", "Others"]}
                onChange={(event) => form.setFieldValue("sports", event)}
                w={150}
                clearable
              />
            </>
          )}
          {category === "event" && (
            <>
              <Select
                classNames={{ input: styles.input }}
                placeholder="Sort by"
                data={[
                  "Newest",
                  "Most Liked",
                  "Most Commented",
                  "Most Relevant",
                ]}
                onChange={(event) => form.setFieldValue("sort", event)}
                clearable
                w={180}
              />
              <Select
                classNames={{ input: styles.input }}
                placeholder="Sports"
                data={["Football", "Basketball", "Others"]}
                onChange={(event) => form.setFieldValue("sports", event)}
                clearable
                w={180}
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
                w={180}
              />
              <Select
                classNames={{ input: styles.input }}
                placeholder="Organization"
                data={["Organization A", "Organization B", "Organization C"]}
                onChange={(event) => form.setFieldValue("organization", event)}
                clearable
                w={180}
              />
            </>
          )}
          <Divider orientation="vertical" />
          <Button color="#007458">All Filter</Button>
          <Divider orientation="vertical" />
          <Button color="#00A67E" type="submit">
            Go
          </Button>
        </Group>
      </Fieldset>
      {!user.teir && (
      <UnstyledButton onClick={()=> navigate('/subscription')}>
        <Image
          src="../../../public/Images/Lock_fill.png"
          style={{ width: rem(50), height: rem(50) }}
        ></Image>
      </UnstyledButton>
      )}
    </form>
  );
}
