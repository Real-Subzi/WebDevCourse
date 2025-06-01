import eventRepo from "@/app/repo/event-repo";

export async function GET(request) {
    const events = await eventRepo.getEvents()
    return Response.json(events, { status: 200 })
}

export async function POST(request) {
    const event = await request.json()
    const newEvent = await eventRepo.addEvent(event)
    return Response.json(newEvent, { status: 200 })
}