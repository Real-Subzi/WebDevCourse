// EventBookingRepo.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class EventBookingRepo {
    async getEvents(){
        try {
            return prisma.event.findMany();
        } catch (error) {
            return {error:error.message};
        }
    }
    async addEvent(event){
        try {
            return prisma.event.create({data:event});
        } catch (error) {
            return {error:error.message}
        }
    }
    async deleteEvent(id){
        try {
            return prisma.event.delete({where:{eventId:id}})
        } catch (error) {
            return {error:error.message}
        }
    }
    async updateEvent(id,event){
        try {
            return prisma.event.update(
                {where:
                    {eventId:id},
                    data:event
                })
        } catch (error) {
            return {error:error.message}
        }
    }
    async getEventBookings(id){
        try {
            return prisma.booking.findMany({
                where: {eventId:id}
            })
        } catch (error) {
            return {error:error.message}
        }
    }
    async addBooking(booking){
        try {
            return prisma.booking.create({
                data:booking
            })
        } catch (error) {
            return {error:error.message}
        }
    }
    async deletebooking(id){
        try {
            return prisma.booking.delete({where:{bookingId:id}})
        } catch (error) {
            return {error:error.message}
        }
    }
    async getBooking(id){
        try {
            return prisma.booking.findFirst({
                where:{bookingId:id}
            })
        } catch (error) {
            return {error:error.message}
        }
    }
}
export default new EventBookingRepo();
