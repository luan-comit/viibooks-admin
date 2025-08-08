import React from "react"
import Fullcalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid/index.js"
import timeGridPlugin from "@fullcalendar/timegrid/index.js"
import interactionPlugin from "@fullcalendar/interaction/index.js"

function Calendar(events) {
  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        events={events}
      />
    </div>
  )
}

export default Calendar
