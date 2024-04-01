import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import styles from "../scss/Calendar.module.scss"

export default function MyCalendar() {
  return (
    <div className={styles.container}>
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
    </div>
  )
}