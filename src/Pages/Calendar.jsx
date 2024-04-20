import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import styles from "../scss/Calendar.module.scss";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery, QueryClient } from "@tanstack/react-query";
import { colors } from "@mui/material";
import { getCalendar } from "../Services/HomeAPI";
import { Loader } from "@mantine/core";

export default function MyCalendar() {
  const [eventsData, setEventsData] = useState([]);
  const { isPending, error, data } = useQuery({
    queryKey: ["getCalendar"],
    queryFn: getCalendar,
  });
  useEffect(() => {
    if (data) {
      const eventsData = data.map((event) => ({
        event_id: event.event_id,
        title: event.description,
        created_at: event.created_at,
        like: event.like,
        start: event.start_time,
        end: event.end_time,
        backgroundColor: "#007458",
        textColor: "white",
        display: "block",
      }));
      setEventsData(eventsData);
    }
  }, [data]);

  const events = [
    {
      event_id: 1,
      title: "isoudfxbhioeajfiovds",
      created_at: "2024-04-19T07:49:30.848871Z",
      like: [],
      start: "2024-04-20T09:00",
      end: "2024-04-21T00:00",
      backgroundColor: "#007458",
      textColor: "white",
      display: "block",
    },
  ];

  console.log(eventsData, isPending, error);
  return (
    <div className={styles.container}>
      <div className={styles.header}>Calendar</div>
      <div className={styles.content}>
        {isPending ? (
          <Loader color="teal" className={styles.loading} />
        ) : error ? (
          <div className={styles.error}>ERROR: {error.message}</div>
        ) : (
          <FullCalendar
            className={styles.calendar}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              start: "today,prev,next",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={eventsData}
          />
        )}
      </div>
    </div>
  );
}
