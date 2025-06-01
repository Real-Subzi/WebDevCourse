import participant from './Participant.js'; //will this double quotes be an issue? nope
export default class Event{
    constructor(eventName,date,location){//I didn't add participant to the constructor because I assume that event is created first, then participants are added.
        this.eventID="";
        this.eventName=eventName;
        this.date=date;
        this.location=location;
        this.participants=[];
    }
    addParticipant(participant){
        this.participants.push(participant);//appends to the end of the array
    }
    removeParticipant(participantID){
        const participantFound = this.participants.find((person)=>person.participantID===participantID); //finds the participant that we want. 
        const participantIndex = this.participants.indexOf(participantFound); //Finds the index of the participant in the array.
        this.participants.splice(participantIndex,1); //Removes at that index.
        console.log("The Participant has been removed! ");
    }
    getParticipants(){
        return this.participants;
    }
    updateParticipant(participant){
        const participantID = participant.participantID;//extract the ID
        const Person = this.participants.find((person)=>person.participantID===participantID);//Find person based on extracted ID
        Person.firstName = participant.firstName;
        Person.lastName = participant.lastName;
        Person.gender = participant.gender;
        Person.email = participant.email;
    }
}

//way to function is to create the event first and then use these participant Methods as they depend on the ID.
