// import React from 'react'
// import EventCard from './EventCard'
// import FilterSection from './FilterSection'

// interface Event {
//   id: number
//   title: string
//   date: string
//   location: string
//   category: string
// }

// interface EventListOrganismProps {
//   events: Event[]
//   categories: string[]
//   selectedCategory: string
//   onCategoryChange: (category: string) => void
// }

// const EventListOrganism: React.FC<EventListOrganismProps> = ({
//   events,
//   categories,
//   selectedCategory,
//   onCategoryChange,
// }) => {
//   return (
//     <div className="event-list">
//       <FilterSection
//         categories={categories}
//         selectedCategory={selectedCategory}
//         onCategoryChange={onCategoryChange}
//       />
//       <div className="events">
//         {events.map((event) => (
//           <EventCard
//             key={event.id}
//             title={event.title}
//             date={event.date}
//             location={event.location}
//             category={event.category}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default EventListOrganism
