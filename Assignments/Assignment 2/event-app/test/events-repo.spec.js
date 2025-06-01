import * as repo from './../events-repo.js';
import Event from './../Event.js';
import Participant from '../Participant.js';
import {expect} from 'chai';

const testEvent = {
    eventID:'',
    eventName: "Hot-Dog-Day",
    date: "01-01-2024",
    location: "USA"
}

describe('Add Event Function',()=>{
    it('Adding an Event should increase the length of the Array',()=>{
        const beforeAddingLength = repo.EventList.length;
        repo.addEvent(testEvent);
        const afterAddingLength = repo.EventList.length;
        expect(afterAddingLength).to.equal(beforeAddingLength+1);
    })
})

describe('Delete Event Function',()=>{
    it('Deleting Event should return undefined',()=>{
        const eventExtracted = repo.EventList.find((event)=>event.eventName==="Hot-Dog-Day");
        const eventIDExtracted = eventExtracted.eventID;
        repo.deleteEvent(eventIDExtracted);
        expect(repo.EventList).to.be.empty;
    })
})

describe('Update Event Function',()=>{
    it('Updating Event should change the event in the Array',()=>{
        repo.addEvent(testEvent);
        const PreviousEvent = repo.EventList.find((event)=>event.eventName==="Hot-Dog-Day");

        const newtestEvent = {
            eventID: PreviousEvent.eventID,
            eventName: "Burger Day",
            date: "09-07-2025",
            location: "UK",
            participants: []
        }

        repo.updateEvent(newtestEvent);
        const newEvent = repo.EventList.find((event)=>event.eventName==="Burger Day"); //See if there is an event in the list called burger day.
        expect(newEvent.date).to.equal("09-07-2025");//see if the attributes are changed.
        expect(newEvent.location).to.equal("UK");
    })
})

const testEvent2 = new Event("Dance Day", "02-06-2020", "India");
const testEvent3 = new Event("Film Day", "01-01-2026", "China");
describe('getEventByParticipant Function', () => {
    it('getEventByParticipant function should give the number of events a particular participant has', () => {
        const part1 = new Participant(123, "Jerome", "Jim", "Male", "Jerome@gmail.com");

        repo.addEvent(testEvent2); 
        repo.addEvent(testEvent3);
        testEvent2.addParticipant(part1); 
        testEvent3.addParticipant(part1);

        const EventsOfParticipant = repo.getEventsByParticipant(123);
        expect(EventsOfParticipant.length).to.equal(2);//Because there are only 2 events that Jerome is in.
    })
})

describe('findUpcomingEvents Function',()=>{
    it('This function should return the latest Event based on the date I provide ',()=>{
        //We know that the latest event is in 2026, hence I will use the date 2025.
        const NewestEvent = repo.findUpcomingEvents("12-31-2025");
        const NewestEventID = NewestEvent.find((event)=>event.eventName==="Film Day").eventID;
        const ExtractedEvent = repo.EventList.find((event)=>event.date==="01-01-2026");

        expect(NewestEventID).to.equal(ExtractedEvent.eventID);//EventID's because they are unique so that proves it is the same
    })
    it('The function should return the correct number of events after the date I provide',()=>{
        const UpcomingEvents = repo.findUpcomingEvents("01-01-2023"); //Should Return an array of two elements.
        const UpcomingEventsLength = UpcomingEvents.length;

        expect(UpcomingEventsLength).to.equal(2);
    })
})