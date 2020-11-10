// league member class
// stores name and age of member
class LeagueMember {
  name; // name of member
  age; // age of member
  constructor(iName, iAge){
    this.name = iName;
    this.age = iAge;
  }
}

// team member, extends the league member by adding,
// the color of the team. 
class LeagueTeamMember extends LeagueMember {
  team; // the team the league member is assigned to
  constructor(iName, iAge, iTeam){
    super(iName, iAge);
    this.team = iTeam;
  }
}

// created persons with no team
let john = new LeagueMember("John Smith", 24);
let mary = new LeagueMember("Mary Doe", 21);
let matt = new LeagueMember("Matt Joe", 30);
let jane = new LeagueMember("Jane Jan", 22);

// added them to a members array
let members = [];

members.push(john);
members.push(mary);
members.push(matt);
members.push(jane);

// go through each league member and use them to create a team member,
// even being red and odd being blue team.
let teamMembers = members.map(function(element, index){
  let team;
  if(index %2 == 0){
    team = "Red";
  } else {
    team = "Blue"
  }
  return new LeagueTeamMember(element.name, element.age, team);
})

// loop through the teamMembers and display them individually 
teamMembers.forEach(function(element){
  console.log(element);
})