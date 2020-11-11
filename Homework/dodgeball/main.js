/* Code Plan
1. Create a class for Player, 

*/



const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

// listOfPlayers will be populated from the arrayOfPeople
const listOfPlayers = []

// where blue team members will be populated
const blueTeam = []

// where red team members will be populated
const redTeam = []



class DodgeballPlayer {
  constructor(person){
    this.id = person.id;
    this.name = person.name;
    this.age = person.age;
  }
    canThrowBall = true;
    canDodgeBall = true;
    isHealthy = true;
    hasPaid = true;
    yearsExperience = true;
}

class Teammate extends DodgeballPlayer {
  team; // the color team the Teammate will be assigned to
  constructor(id, name, age, team){
    super(id, name, age);
    this.team = team;
    // if else statement to declare the mascot based on team color
    if(team === "red"){
      this.mascot = "Devils"
    } else if (team === "blue") {
        this.mascot = "Angels"
      }
    }
  }


// this function was provided but lists the arrOfPeople via the DOM so you can choose them for dodgeBallPlayer
const listPeopleChoices = () => {
  // grabs the UL by its ID 'people'
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    // creates an li to add the person to
    const li = document.createElement("li")
    // creates a button to move the person to a player
    const button = document.createElement("button")
    // adds text to said button for call to action reasons
    button.innerHTML = "Make Player"
    // function to make it clickable
    button.addEventListener('click', function() {makePlayer(person)} )
    // appends the new player to the li
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

// function for the button that should create a new dodgeBallPlayer object that can be pushed 
const makePlayer = (person) => {
  console.log(person)
  let newPlayer = new DodgeballPlayer(person)
  console.log(newPlayer)
  listOfPlayers.push(newPlayer.name)
  console.log(listOfPlayers)
}
