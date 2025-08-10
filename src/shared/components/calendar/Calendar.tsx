// Calendar.tsx
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useState } from 'react'

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      title: 'Cita con Juan',
      start: '2025-08-06T10:00:00',
      end: '2025-08-06T11:00:00',
    },
  ])

  const handleDateSelect = (selectInfo: any) => {
    const title = prompt('Título de la cita:')
    const calendarApi = selectInfo.view.calendar
    calendarApi.unselect()

    if (title) {
      const newEvent = {
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      }
      setEvents((prev) => [...prev, newEvent])
    }
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      selectable={true}
      editable={true}
      events={events}
      select={handleDateSelect}
      slotMinTime="08:00:00"
      slotMaxTime="20:00:00"
      allDaySlot={false}
    />
  )
}

export default CalendarComponent
