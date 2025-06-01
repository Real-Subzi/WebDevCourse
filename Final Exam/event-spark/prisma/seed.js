import fs from 'fs-extra'
import path from 'path'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const eventsPath = path.join(process.cwd(), 'app/data/events.json')
const bookingsPath = path.join(process.cwd(), 'app/data/bookings.json')

async function seed() {
    try {
        const events = await fs.readJSON(eventsPath)
        const bookings = await fs.readJSON(bookingsPath)

        // Delete all existing entries in the database
        await prisma.booking.deleteMany({})
        await prisma.event.deleteMany({})

        // Seed events
        for (const event of events)
            await prisma.event.create({ data: event })

        // Seed bookings
        for (const booking of bookings)
            await prisma.booking.create({ data: booking })

        console.log('Seeding completed successfully.')
    } catch (error) {
        console.error('Failed to seed:', error)
    }
}

seed()
