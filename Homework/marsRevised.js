
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
  }
}

class CrewMember{
  // code here 
  constructor(name, job){
    this.name = name;
    this.job = job;
    this.vessel = null;
  }
  board(v){
    this.vessel = v.type;
    v.crew.push(this);
  } 
}


let p1 = new Vehicle("B123", "Plane");
let boat1 = new Vehicle("USS Grant", "Boat");
let heli = new Vehicle ("Batcopter", "Heli");
let steve = new CrewMember("Steve", "Pilot");
let mary = new CrewMember("Mary", "Captain");
let john = new CrewMember("John", "Heli Pilot");

heli.ready(); // should be false
boat1.ready(); // should be false


john.board(heli); // this is the tricky part

heli.ready(); // should be true 



