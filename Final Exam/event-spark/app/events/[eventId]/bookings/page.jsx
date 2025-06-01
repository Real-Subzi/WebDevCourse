import {React} from 'react'
import styles from '@/app/page.module.css'
import eventRepo from '@/app/repo/event-repo';
export default async function page({params}) {
    const eID = params.eventId;
    console.log(eID)
    const bookings = await eventRepo.getEventBookings(eID)
    console.log("THIS IS BOOKING",bookings)
    const eventList = await eventRepo.getEvents();
    const event = eventList.find((event)=>event.eventId==eID)
    
  return (
    <>  
        <h1>Bookings of {event.name}</h1>
        <hr />
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Booking ID</th>
                    <th>Event ID</th>
                    <th>Number of Tickets</th>
                </tr>
            </thead>
            <tbody>

                {bookings.map(booking=>
                <tr>
                    <td>{booking.bookingId}</td>
                    <td>{booking.eventId}</td>
                    <td>{booking.numberOfTickets}</td>
                </tr>
            )}
            </tbody>
        </table>
        </>
  )
}
