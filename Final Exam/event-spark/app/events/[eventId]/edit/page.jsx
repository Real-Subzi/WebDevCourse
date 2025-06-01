'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import {useRouter,useSearchParams} from 'next/navigation'

export default function page() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const event = Object.fromEntries(searchParams)

    async function handleSubmit(e){
        e.preventDefault(); //stop it submitting
        const formData = new FormData(e.target)
        const newEvent = Object.fromEntries(formData); //now we have new account
        const response = await fetch(`/api/events/${event.eventId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newEvent)
                }
            )
        router.push('/')
        router.refresh();
    }

  return (
    <>
        <form className={styles.form} onSubmit={e=>handleSubmit(e)}>
        <h2>Event Information</h2>
        <div className={styles.formGroup}>
            <label htmlFor="name">Event Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter event name"
                className={styles.input}
                required
                defaultValue={event.name}
            />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="location">Location:</label>
            <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter location"
                className={styles.input}
                required
                defaultValue={event.location}
            />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="organizer">Organizer:</label>
            <input
                type="text"
                id="organizer"
                name="organizer"
                placeholder="Enter organizer"
                className={styles.input}
                required
                defaultValue={event.organizer}
            />
        </div>
        <button type="submit" className={styles.submitBtn}>
            Update
        </button>
    </form>
    </>
  )
}
