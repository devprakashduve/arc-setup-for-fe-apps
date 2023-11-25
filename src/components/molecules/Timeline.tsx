import React from 'react'

interface TimelineEvent {
  title: string
  description: string
  date: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <span>{event.date}</span>
        </div>
      ))}
    </div>
  )
}

export default Timeline
