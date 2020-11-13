CODE PLAN:
1. Create variables for red team, blue team, and the listOfPlayers. Delcare them as empty arrays to be pushed into later.
2. Call the listPeopleChoices function to display on the DOM the 6 people from arrOfPeople
3. Create a Class for DodgeBallPlayer and extend that class for when the players are assigned to a team, Teammate class.
4. Create a similar function to the one provided called, listPlayerChoices, to display on the DOM the players when they have been made a player from the person array.
5. Create a makePlayer function to add a button to the persons in the List of People on the DOM. Add functionality so that when you click Make Player they are pushed to the listOfPlayers array.
  a) within this function add buttons to choose which team to add the player to, red team & blue team buttons. 
6. Lastly create a function addToTeam to change the player objects team from null to red or blue, and then append them to the DOM and the appropraite array of either redTeam or blueTeam. 
  a) within this function remove them from the arrayOfPlayers when they are chosen to be either red or blue. 