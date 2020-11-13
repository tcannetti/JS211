
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
    this.skillset = person.skillset;
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
    li.id = "person" + person.id
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
    // const li = document.createElement("li")
    
    // let blueButton = document.createElement("button");
    // let redButton = document.createElement("button");

    // redButton.innerText = "Red Team";
    // redButton.className = "red-team";
    // // button function with click as event listener
    // redButton.addEventListener('click', function() {addToTeam(player, 'red')});
  
    // // blue button functionality
    // blueButton.innerText = "Blue Team";
    // blueButton.className = "blue-team";
    // // button function with click as event listener
    // blueButton.addEventListener('click', function() {addToTeam(player, 'blue')});
    // // assign an id so that they can be removed later
    // li.id = 'player' + player.id;
    // // append all to the page
    // players.appendChild(li);
    // li.appendChild(redButton);
    // li.appendChild(blueButton);
    
    // // appends the new player to the li
    // // li.appendChild(button)
    // li.appendChild(document.createTextNode(player.name + " - " + player.skillSet))
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
  // listPlayerChoices();
  // find index of person to player
  let peopleIndex = arrOfPeople.findIndex(function(element){
    return person.id == element.id
  })
  // remove them from the previous list when they are moved 
  arrOfPeople.splice(peopleIndex, 1)
  // refresh list 
  const li = document.createElement("li")
    
  let blueButton = document.createElement("button");
  let redButton = document.createElement("button");

  redButton.innerText = "Red Team";
  redButton.className = "red-team";
  // button function with click as event listener
  redButton.addEventListener('click', function() {addToTeam(person, 'red')});

  // blue button functionality
  blueButton.innerText = "Blue Team";
  blueButton.className = "blue-team";
  // button function with click as event listener
  blueButton.addEventListener('click', function() {addToTeam(person, 'blue')});
  // assign an id so that they can be removed later
  li.id = 'player' + person.id;
  // append all to the page
  players.appendChild(li);
  li.appendChild(redButton);
  li.appendChild(blueButton);
  
  // appends the new player to the li
  // li.appendChild(button)
  li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
  document.getElementById('person' + person.id).remove();
}


const addToTeam = (player, color) => {
  // first need to discover which team button was selected
  let newTeamPlayer;
  let team;
  if(color == "blue"){
    // new player object with color selected
    newTeamPlayer = new Teammate(player, color)
    // push to blueTeam array
    blueTeam.push(newTeamPlayer)
    // declare team variable and push to the DOM
    team = document.getElementById("blue");
  } else {
      // create new team player object based on color and name
      newTeamPlayer = new Teammate(player, color)
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
    // remove the player from the player pool after they are added 
    document.getElementById('player' + player.id).remove();
    // remove the selected player from the previous list ???
    // ?
  }


// TESTS
// I would test that my makePlayer function works.
// I would check that the length of arrayOfPlayers had increased by 1 after makePlayer is called on the player parameter. 

// I would check makePlayer again to see if not only is it adding to arrayOfPlayers but also that it is splicing the correct person out of the arrayOfPeople.
// i would loop through arrayOfPeople by the person.name and compare that to the listOfPlayers array with the player.name; using an if statement decide if there is only one instance of that DodgeBallPlayer

// I would check that the addToTeam function is adding the color paramter to the new Teammate class.
// I would loop through the redTeam or blueTeam array and check that the Teammate class had been passed the correct color. if statement again comparing the redTeam array to player.color & blueTeam array doing the same. 