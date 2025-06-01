import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class BooksRepo {

    async getBooks() { //works
        try {
            return prisma.book.findMany();
        } catch (error) {
            return { error: error.message }
        }
    }

    async getBookByISBN(isbn) { //works
        try {
            return prisma.book.findUnique({ where: { isbn: isbn } })
        } catch (error) {
            return { error: error.message }
        }
    }

    async getBook(name) { //works
        try {
            return prisma.book.findMany({ where: { title: {contains: name } }})
            //console.log(searchResults)
        } catch (error) {
            return { error: error.message }
        }
    }

    async addBook(book) { //works. If you want you can put id, but make it unique or dont put at all.
        try {
            return prisma.book.create({ data: book });
        } catch (error) {
            return { error: error.message }
        }
    }

    async updateBook(isbn, updatedBook) { //works
        try {
            const book = await prisma.book.findFirst({where:{isbn:isbn}})
            const bookid = book.id
            console.log(bookid)
            return prisma.book.update(
                { where: { id:bookid },
                data:updatedBook},
            )
        } catch (error) {
            return { error: error.message }
        }
    }

    async deleteBook(isbn) { //works
        try {
            const book = await prisma.book.findFirst({where:{isbn:isbn}})
            //console.log(book.id,"hi") 
            return prisma.book.delete({ where: { id: book.id } })
        } catch (error) {
            return { error: error.message }
        }
    }

    async getBooksByPageCount(pageCount) { //works
        try {
            return prisma.book.findMany({ where: { pageCount: { gte: parseInt(pageCount) } } })
        } catch (error) {
            return { error: error.message }
        }
    }

    async getBooksByAuthor(authorName) { //works
        if (!authorName || typeof authorName !== 'string') {
            throw new Error("Invalid author name");
        }
        try {
            const matchedAuthors = prisma.author.findMany({
                where: {
                    OR: [
                        { firstName: { contains: authorName } },
                        { lastName: { contains: authorName } }
                    ]
                }
            })

            const authorsIDS = (await matchedAuthors).map((author) => author.authorId)

            return prisma.book.findMany(
                {
                    where: {
                        authorId:
                            { in: authorsIDS }
                    }
                }
            )
        } catch (error) {
            return { error: error.message }
        }
    }

    async getBookByISBN(isbn) { //works
        if (!isbn || typeof isbn !== 'string') {
            throw new Error("Invalid ISBN");
        }
        return prisma.book.findFirst({where:{isbn:isbn}})
    }

    // async getBooksByCategory(bookCategory) {
    //     if (!bookCategory || typeof bookCategory !== 'string') {
    //         throw new Error("Invalid book category");
    //     }
    //     const books = await this.getBooks();
    //     return books.filter(book => book.categories.some(category => category.toLowerCase().includes(bookCategory.toLowerCase())));
    // }

    // async getBooksSummary() {
    //     const summary = {};
    //     const books = await this.getBooks();
    //     const summaries = []
    //     books.forEach(book => {
    //         book.authors.forEach(author => {
    //             summary[author] = (summary[author] || 0) + 1;
    //         });
    //     });

    //     // Convert the summary object to an array of [author, books] pairs
    //     const summaryArray = Object.entries(summary);

    //     // Sort the array by the number of books in descending order
    //     summaryArray.sort((a, b) => b[1] - a[1]);

    //     // Convert the sorted array back to an object
    //     const sortedSummary = Object.fromEntries(summaryArray);

    //     return sortedSummary;
    // }

    // async saveBooks(books) {
    //     await fs.writeJSON(this.#booksFilePath, books, { spaces: 2 });
    //     return books;
    // }

    // async cleanBooks() {
    //     const books = await this.getBooks();
    //     const cleanBooks = books.filter(book => book.shortDescription && book.shortDescription.length > 10);
    //     await this.saveBooks(cleanBooks);
    // }

    async getAuthorsBookCount() { //works
        const summary = prisma.author.findMany({
            select:{
                firstName: true,
                lastName: true,
                books:true
            }
        })

        return (await summary).map((author)=>
            ({firstName:author.firstName,
            lastName:author.lastName,
            bookCount:author.books.length}))
    }
}

export default new BooksRepo();

// const repo = new BooksRepo();
// // const books = await repo.getBooks()

// // // add a new book
// // const book = books[0]
// // book.title = "new title"
// // book.isbn = '123adf123'
// // delete book.id
// // // console.log(book);

// try {
//     const response = await repo.getBookByISBN("935182455")
//     console.log(response);
// } catch (error) {
//     console.log(error);
// }

