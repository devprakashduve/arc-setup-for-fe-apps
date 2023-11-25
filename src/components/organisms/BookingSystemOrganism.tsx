import React from 'react'
import Calendar from './Calendar'
import BookingForm from './BookingForm'
import BookingList from './BookingList'

interface Booking {
  id: number
  date: string
  time: string
  user: string
}

interface BookingSystemOrganismProps {
  bookings: Booking[]
}

const BookingSystemOrganism: React.FC<BookingSystemOrganismProps> = ({
  bookings,
}) => {
  return (
    <div className="booking-system">
      <div className="booking-calendar">
        <Calendar />
      </div>
      <div className="booking-section">
        <BookingForm />
        <BookingList bookings={bookings} />
      </div>
    </div>
  )
}

export default BookingSystemOrganism
