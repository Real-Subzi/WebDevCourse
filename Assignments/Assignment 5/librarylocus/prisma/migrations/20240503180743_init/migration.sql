-- CreateTable
CREATE TABLE "Author" (
    "authorId" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "pageCount" INTEGER NOT NULL,
    "publishedDate" DATETIME NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("authorId") ON DELETE RESTRICT ON UPDATE CASCADE
);
