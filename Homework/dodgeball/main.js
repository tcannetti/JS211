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
    yearsExperience = this.age - 2;
}

class Teammate extends DodgeballPlayer {
  constructor(person, team){
    super(person);
    this.team = team;
    // if else statement to declare the mascot based on team color
    // if(team === "red"){
    //   this.mascot = "Devils"
    // } else if (team === "blue") {
    //     this.mascot = "Angels"
    //   }
    }
  }


// this function was provided but lists the arrOfPeople via the DOM so you can choose them for dodgeBallPlayer
const listPeopleChoices = () => {
  // grabs the UL by its ID 'people'
  const listElement = document.getElementById('people')
  // prevent the list people button from populating more than once by resetting the HTML
  listElement.innerHTML = '' 
  arrOfPeople.map(person => {
    // creates an li to add the person to
    const li = document.createElement("li")
    // creates a button to move the person to a player
    const button = document.createElement("button")
    // adds text to said button for call to action 
    button.innerHTML = "Make Player"
    // function to make it clickable
    button.addEventListener('click', function() {makePlayer(person)} )
    // appends the new player to the li
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const listPlayerChoices = () => {
  // grabs the UL by its ID 'players'
  const listElement = document.getElementById('players')
  // prevent the list people button from populating more than once by resetting the HTML
  listElement.innerHTML = '' 
  listOfPlayers.map(player => {
    // creates an li to add the player to
    const li = document.createElement("li")
    // creates a button to move the person to a player
    // const button = document.createElement("button")
    // adds text to said button for call to action 
    // button.innerHTML = "Make Player"
    // function to make it clickable
    // button.addEventListener('click', function() {makePlayer(player)} )
    let blueButton = document.createElement("button");
    let redButton = document.createElement("button");

    redButton.innerText = "Red Team";
    redButton.className = "red-team";
    // button function with click as event listener
    redButton.addEventListener('click', function() {addToTeam(player, 'red')});
  
    // blue button functionality
    blueButton.innerText = "Blue Team";
    blueButton.className = "blue-team";
    // button function with click as event listener
    blueButton.addEventListener('click', function() {addToTeam(player, 'blue')});
    
      // append all to the page
      players.appendChild(li);
      li.appendChild(redButton);
      li.appendChild(blueButton);
    
    // appends the new player to the li
    // li.appendChild(button)
    li.appendChild(document.createTextNode(player.name + " - " + player.skillSet))
    // listElement.append(li)
  })
}

// function for the button that should create a new dodgeBallPlayer object that can be pushed 
const makePlayer = (person) => {
  console.log(person)
  // create a new player invoking the DodgeballPlayer class
  let newPlayer = new DodgeballPlayer(person)
  console.log(newPlayer)
  // push that player to the listOfPlayers array
  listOfPlayers.push(newPlayer)
  console.log(listOfPlayers)
  listPlayerChoices();
  // find index of person to player
  let peopleIndex = arrOfPeople.findIndex(function(element){
    return person.id == element.id
  })
  // remove them from the previous list when they are moved 
  arrOfPeople.splice(peopleIndex, 1)
  // refresh list 
  listPeopleChoices();
  
  // create a variable for easy use of players UL
  // let players = document.getElementById("players");
  // // create an li in the HTML for the player to be appended to
  // let li = document.createElement("li");
  // // add by name
  // li.innerText = `${newPlayer.name}`
  // create buttons for the players to move to red or blue
  // let blueButton = document.createElement("button");
  // let redButton = document.createElement("button");
  // // red button functionality
  // redButton.innerText = "Red Team";
  // redButton.className = "red-team";
  // // button function with click as event listener
  // redButton.addEventListener('click', function() {addToTeam(person)});

  // // blue button functionality
  // blueButton.innerText = "Blue Team";
  // blueButton.className = "blue-team";
  // // button function with click as event listener
  // blueButton.addEventListener('click', function() {addToTeam(person)});

  // append all to the page
  // players.appendChild(li);
  // li.appendChild(redButton);
  // li.appendChild(blueButton);
}


const addToTeam = (player, color) => {
  // first need to discover which team button was selected
  let newTeamPlayer;
  let team;
  if(color == "blue"){
    // new player object with color selected
    newTeamPlayer = new Teammate(player.id, player.name, color)
    // push to blueTeam array
    blueTeam.push(newTeamPlayer)
    // declare team variable and push to the DOM
    team = document.getElementById("blue");
  } else {
      // create new team player object based on color and name
      newTeamPlayer = new Teammate(player.id, player.name, color)
      // push to red team array
      redTeam.push(newTeamPlayer)
      team = document.getElementById("red")
    }
    console.log(blueTeam);
    console.log(redTeam);
    // finally create the LI for the newTeamPlayers to move to

    let li = document.createElement("li")
    // create a string for the newTeamPlayer to append to th li 
    li.appendChild(document.createTextNode(newTeamPlayer.name));
    // append it
    team.appendChild(li)

    // remove the selected player from the previous list ???
    // ??
  }


