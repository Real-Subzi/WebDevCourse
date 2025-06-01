import eventRepo from "@/app/repo/event-repo";

export async function PUT(request, { params }) {
    const eventid = params.eventId
    const eventUpdate = await request.json()
    const updatedEvent = await eventRepo.updateEvent(eventid,eventUpdate)
    return Response.json(updatedEvent, { status: 200 })
}