-- CreateTable
CREATE TABLE "Event" (
    "eventId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "organizer" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Booking" (
    "bookingId" TEXT NOT NULL PRIMARY KEY,
    "numberOfTickets" INTEGER NOT NULL,
    "eventId" TEXT NOT NULL,
    CONSTRAINT "Booking_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("eventId") ON DELETE RESTRICT ON UPDATE CASCADE
);
