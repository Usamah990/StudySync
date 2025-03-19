import React from 'react'
import TimelineHeader from '../components/ui/timeline/TimelineHeader'
import BigCalendar from '../components/ui/timeline/Calendar'

function Timeline() {
  return (
    <div className='bg-[#EEEAE7]'>
      <TimelineHeader/>
      <main>
        <BigCalendar/>
      </main>
    </div>
  )
}

export default Timeline