import Participant from "./Participant.js";
import Event from "./Event.js";
import * as repo from "./events-repo.js";

//Lets create a few Participants.
const part1 = new Participant(23,"Jerome","Aceti","Male","Gamer@Gmail.com");
const part2 = new Participant(49,"Peter","Deligdisch","Male","CarHouse@Yahoo.com");
const part3 = new Participant(31,"Sarah","Johns","Female","FluffyHorse@Bing.com");
const part4 = new Participant(92,"Alisa","Adams","Female","PotatoChips@Hotmail.com");
const part5 = new Participant(25,"Abdulrahman","Waleed","Male","ABWaleed@Outlook.com");
console.log("PARTICIPANTS: ",part1,part2,part3,part4,part5,"\n\n"); //Proof Participants have been created.

//Lets create a few Events.
const Event1 = new Event("Comic-Con","19-02-2020","Boston");//Past Event
const Event2 = new Event("Hot-Dog-Day","16-03-2025","Doha");//Future Event
const Event3 = new Event("Qatar National Day", "18-12-2023","Doha");//Past Event
const Event4 = new Event("Famous Concert", "09-01-2026","London");//Future Event
const Event5 = new Event("Friendly Gathering (Males)","04-06-2023","Whatsapp");//Past Event
console.log("EVENTS: ",Event1,Event2,Event3,Event4,Event5,"\n\n"); //Proof Events have been Created.

//EVENT CODES:
Event1.addParticipant(part1); Event1.addParticipant(part2); Event1.addParticipant(part3); Event1.addParticipant(part4);Event1.addParticipant(part5); //Add Everyone to Event1.
console.log("PARTICIPANTS AFTER ADDING:", Event1.getParticipants(),"\n\n"); //Proof that participants added and getParticipants works.
//Can't use string literal otherwise it calls the getParticipants() to string method: [obj obj],[obj obj]...

//Example: I want to remove participant 5 because I accidentally added him.
Event1.removeParticipant(part5);
console.log("PARTICIPANTS AFTER REMOVAL: ", Event1.getParticipants(),"\n\n");

//Example: Lets say I want to update Participant 1's email because I wrote it wrong.
part1.email = "JeromeAceti@Gmail.com" //I just alter the email with everything else remaining the same.
Event1.updateParticipant(part1);
console.log("PARTICIPANTS AFTER UPDATING: ",Event1.getParticipants(),"\n\n");



//EVENTS-REPO CODES:
repo.addEvent(Event1);
repo.addEvent(Event2);
repo.addEvent(Event3);
repo.addEvent(Event4);
repo.addEvent(Event5);
console.log("SHOWS THAT EVENTS ARE ADDED: ",repo.EventList,"\n\n");

//Lets say I want to update Event1's location to Los Angeles
Event1.location = "Los Angeles";
repo.updateEvent(Event1);
console.log("UPDATED REPO: ",repo.EventList,"\n\n");//We can see it is changed.

//lets say I want to delete the event of comic-con
const eventExtracted = repo.EventList.find((event)=>event.eventName==="Comic-Con")
const eventIDExtracted = eventExtracted.eventID;
repo.deleteEvent(eventIDExtracted);
console.log("REPO AFTER DELETION: ",repo.EventList,"\n\n"); //We can observe that it is deleted.

//Lets say I want to get events that a particular participant is in.
//First I will add a participant to certain events.
//Jerome is already in event1 but that was deleted, but i want to add him to event2, and 3.
Event2.addParticipant(part1);Event3.addParticipant(part1);
console.log("EVENTS JEROME IS A PART OF: ",repo.getEventsByParticipant(23),"\n\n");//we observe that jerome is in Hotdog day and Qatar National Day.

//Lets say I want to find events after 01-01-2024
console.log("UPCOMING EVENTS: ",repo.findUpcomingEvents("01-01-2024"),"\n\n"); //only 1 event as the 2025 event was deletd. It should be the 2026 Event.

//Now lets say I want the EventParticipantsSummary
//because we deleted the first event I add some people to the second event. (HOT DOG EVENT)
Event2.addParticipant(part1);Event2.addParticipant(part2);Event2.addParticipant(part3);Event2.addParticipant(part4);
const TheEvent = repo.EventList.find((event)=>event.eventName==="Hot-Dog-Day")
const TheeventIDExtracted = TheEvent.eventID;
repo.getEventParticipantsSummary(TheeventIDExtracted)
