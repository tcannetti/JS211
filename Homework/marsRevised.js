
/*
1. Vehicle class
a. properties:
  name: string represents the name of the Vehicle
  crew: array of crewmembers currently on board 
b. Method:
  ready(): returns true if the appropriate crew member is on board 

2. CrewMember:
a. properties:
  name: string that is name of crewmembers
  job: string job title 
  vehicle: start out null, but calling the board method should update it to current vehicle
b. Method:
  board(vehicle): this method should add this crewmember to the passe in vehicle list of crew
*/


// 1 class that represents a vehicle
// the vehicle should have a type property


// the vehicle should have a property that holds a list
// crew on board


// vehicle class should have a ready() method,
// should return true or false, if appropriate crewmember is on board


// 2 classes that represent CrewMember
// they should have a name
// they should have a title ie: 'pilot', 'captain'


// the CrewMember class should have a method called 
// board(vehicle)

class Vehicle{
  // code here
  constructor(name, type){
    this.name = name;
    this.type = type;
    this.crew = [];
  }
  ready(){
    // here goes code 
    // loops through with forEach to check each object in all arrays and prepare for takeoff with if/else
    this.crew.forEach(function(crewMem){
      if((crewMem.job === "Conductor" && crewMem.vessel.type === "Train") ||
      (crewMem.job === "Pilot" && crewMem.vessel.type === "Plane") ||
      (crewMem.job === "Captain" && crewMem.vessel.type === "Boat")){
        console.log(`The ${crewMem.job}, ${crewMem.name} is on board the ${crewMem.vessel.type}! Ready to Depart!`)
        return true
        // if one of these passes return true with message
      } else {
        return false;
        // otherwise return false
      }
    })
    
  }
}

class CrewMember{
  // code here 
  constructor(name, job){
    this.name = name;
    this.job = job;
    this.vessel = null;
  }
  board(vessel){
    this.vessel = vessel.type;
    vessel.crew.push(this);
  } 
}

// Vehicle Classes
let train = new Vehicle ("Thomas", "Train");
let plane = new Vehicle("B123", "Plane");
let boat = new Vehicle("USS Grant", "Boat");

train.ready(); // should be false
plane.ready(); // should be false

// Crew Classes
let john = new CrewMember("John", "Conductor");
let mary = new CrewMember("Mary", "Captain");
let steve = new CrewMember("Steve", "Pilot");


john.board(train); // this is the tricky part

train.ready(); // should be true 




