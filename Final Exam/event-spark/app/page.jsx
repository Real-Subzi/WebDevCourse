import Image from "next/image";
import styles from "./page.module.css";
import eventBookingRepo from "@/app/repo/event-repo";
import Link from "next/link";

export default async function Home() {
  const events = await eventBookingRepo.getEvents()
  return (
    <>
      
        <div className={styles.headline}>
            <h1>Events and Booking</h1>
            <p>Your Event, Our Expertise</p>
        </div>
        <hr />
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Event ID</th>
                    <th>Event Name</th>
                    <th>Location</th>
                    <th>Organizer</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {events.map((event)=>
                <tr >
                    <td>{event.eventId}</td>
                    <td>{event.name}</td>
                    <td>{event.location}</td>
                    <td>{event.organizer}</td>
                    <td>
                        <div className={styles.actionBtns}>
                            <Link href={{pathname:`/events/${event.eventId}/bookings`}}>View Bookings</Link>
                            <Link href={{pathname: `/events/${event.eventId}/edit`,query:event}}><button className={styles.deleteBtn}>Update</button></Link>
                        </div>
                    </td>
                </tr>)
              }   
            </tbody>
        </table>
    
    </>
  )
}
