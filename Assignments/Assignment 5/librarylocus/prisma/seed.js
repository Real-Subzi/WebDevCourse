import fs from 'fs-extra'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const authorsPath = path.join(process.cwd(), 'app/data/authors.json')
const booksPath = path.join(process.cwd(), 'app/data/books.json')

async function main() {
    try {
        const authors = await fs.readJSON(authorsPath)
        const books = await fs.readJSON(booksPath)

        for (const author of authors) await prisma.author.create({ data: author })
        for (const book of books) await prisma.book.create({ data: book })

    } catch (error) {
        console.log(error);
        return { error: error.message }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })