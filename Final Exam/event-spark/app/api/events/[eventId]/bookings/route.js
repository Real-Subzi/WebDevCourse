import eventRepo from "@/app/repo/event-repo"

export async function GET(request, { params }) {
    const eventid = params.eventId
    const bookings = await eventRepo.getEventBookings(eventid)
    return Response.json(bookings, { status: 200 })
}
