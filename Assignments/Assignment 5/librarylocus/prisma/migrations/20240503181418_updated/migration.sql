-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "pageCount" INTEGER NOT NULL,
    "publishedDate" DATETIME NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("authorId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("authorId", "id", "isbn", "pageCount", "publishedDate", "status", "thumbnailUrl", "title") SELECT "authorId", "id", "isbn", "pageCount", "publishedDate", "status", "thumbnailUrl", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
