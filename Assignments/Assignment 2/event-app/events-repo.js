import Event from './Event.js';
export const EventList = []

export function addEvent(event){

    const RandomNumber = Math.floor(Math.random()*(6-1)+1)//Need to generate a random number. (rand*(max-min)+min)

    if(EventList.find((event)=>event.eventID===RandomNumber) === undefined){//if no event with this number
        event.eventID = RandomNumber;//Assign the random number
        EventList.push(event);//push event into the array.
        console.log("Event Added")
    }else{//if random number exists
        addEvent(event);//call this method again in hopes of getting unique number. Recursive.
    }
}
export function updateEvent(event){
    const extractedID = event.eventID;
    const foundEvent = EventList.find((event)=>event.eventID===extractedID); //obj must be lowercase 
    foundEvent.eventID = event.eventID;
    foundEvent.eventName = event.eventName;
    foundEvent.date = event.date;
    foundEvent.participants = event.participants;
    foundEvent.location = event.location;
    console.log("Event Updated");
}

export function deleteEvent(eventID){
    const foundEvent = EventList.find((event)=>event.eventID===eventID);//The event found based on ID. //instead for efficiency do find index
    const IndexDeletion = EventList.indexOf(foundEvent);//find index to delete in Event List.
    EventList.splice(IndexDeletion,1);//Delete the Event.
    console.log("Event Deleted")
}

export function getEventsByParticipant(participantID){ //MIGHT HAVE ERROR BECAUSE PARTICIPANT ISN'T IMPORTED. It doesn't have the error.
    return(EventList.filter((event)=>event.participants.find((participant)=>participant.participantID===participantID)));
}

export function findUpcomingEvents(date){
    return(EventList.filter((event)=> (new Date(event.date))>(new Date(date)) )); //convert the string to date.
}

export function getEventParticipantsSummary(eventID){
    const FoundEvent = EventList.find((event)=>{
        return event.eventID===eventID; //wanted to try this format for practice.
    })
    const EventInfo = `EventID: ${FoundEvent.eventID}, EventName: ${FoundEvent.eventName}, 
    EventDate: ${FoundEvent.date}, Location: ${FoundEvent.location}, Participants: ${FoundEvent.participants}`;
    const ParticipantCount = FoundEvent.participants.length;

    const MaleParticipants = FoundEvent.participants.filter((people)=>people.gender === "Male");//returns array of males
    const MaleParticipantsCount = MaleParticipants.length;//gets male count

    const FemaleParticipants = FoundEvent.participants.filter((people)=>people.gender === "Female");//returns Females array
    const FemaleParticipantsCount = FemaleParticipants.length;//gets female count

    console.log(`SUMMARY:\n EVENT INFO: ${EventInfo}\n TOTAL PARTICIPANT COUNT: ${ParticipantCount} \n 
    NUMBER OF MALES: ${MaleParticipantsCount}\n NUMBER OF FEMALES: ${FemaleParticipantsCount}`);
}


