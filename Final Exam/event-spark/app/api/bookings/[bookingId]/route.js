import eventRepo from "@/app/repo/event-repo";

export async function DELETE(request, { params }) {
    const bookingId = params.bookingId
    const message = await eventRepo.deletebooking(bookingId)
    return Response.json({ message }, { status: 200 })
}
