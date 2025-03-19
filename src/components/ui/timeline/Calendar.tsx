import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { useState } from 'react';

const localizer = momentLocalizer(moment);
const today = new Date();

const events = [
  {
    title: 'Daily Standup Meeting',
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
  },
  {
    title: 'Lunch Break',
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
  },
  {
    title: 'Work Session',
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 17, 0),
  },
];

export default function BigCalendar() {
  return (
    <div className="p-0 bg-white rounded-lg shadow-md">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        className="border border-gray-300 rounded-lg p-2 "
        views={['day']}
        defaultView="day"
        eventPropGetter={() => ({ className: 'p-2 bg-blue-200 rounded-md' })}
      />
    </div>
  );
}
