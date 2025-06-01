import fs from 'fs-extra'
import path from 'path'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const teamsPath = path.join(process.cwd(), 'app/data/teams.json')
const playersPath = path.join(process.cwd(), 'app/data/players.json')

async function seed() {
    try {
        const teams = await fs.readJSON(teamsPath)
        const players = await fs.readJSON(playersPath)

        for (const team of teams)
            await prisma.team.create({ data: team })

        for (const player of players)
            await prisma.player.create({ data: player })

        console.log('successfully seeded');
    } catch (error) {
        console.log(error);
        return { error: error.message }
    }
}

await seed()