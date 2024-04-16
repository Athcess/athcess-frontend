import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import styles from "../scss/Calendar.module.scss";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery, QueryClient } from "@tanstack/react-query";
import { colors } from "@mui/material";
import { getEventToCalendar } from "../Services/HomeAPI";
import { Loader } from "@mantine/core";

export default function MyCalendar() {
  const { isPending, error, data } = useQuery({
    queryKey: ["getEventToCalendar"],
    queryFn: getEventToCalendar,
  });
  const events = [
    {
      title: "Event Event Event 1111 22222",

      start: "2024-04-16T09:00",
      end: "2024-04-16T10:00",
      backgroundColor: "#007458",
      textColor: "white",
      display: "block",
    },
    {
      title: "Event Event Event 1111 22222 333333",

      start: "2024-04-18T09:00",
      end: "2024-04-20T10:00",
      backgroundColor: "#007458",
      textColor: "white",
      display: "block",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>Calendar</div>
      <div className={styles.content}>
        <FullCalendar
          className={styles.calendar}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "today,prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
        />
        {/* <Loader color="teal" className={styles.loading} /> */}
        {/* <div className={styles.error}>ERROR!</div> */}
      </div>
    </div>
  );
}
