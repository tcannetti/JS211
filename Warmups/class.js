// framework for creating a new object
// helps create less code repitition 
// constructors 

let me = {
  name: "Taylor",
  age: 30,
  skills: ["game", "sleep", "argue"]
}

let hero = {
  name: "Goku",
  age: 30,
  skills: ["fight", "fly", "train"]
}

// ^ hard coded examples, would be hard with lots of users

class Person {
  firstName;
  lastName;
  skills;

  constructor(nameInput){
    // this is where you put that code that should run 
    // when the instance is being constructed
    this.skills = [];
    let fullName = nameInput.split(" ");
    console.log(nameInput, " -> ", fullName);
    this.firstName = fullName[0];
    this.lastName = fullName[1];
  }
  /* This method will add a new skill */
  learn(newSkill){
    if(this.skills.length < 3){
      this.skills.push(newSkill);
    }
  }
};

let antagonist = new Person("Jean Claude");
let neo = new Person('Thomas');
let trinity = new Person("trinity");

console.log('me name: ', neo.name);
console.log('me name: ', neo.skills);

neo.learn('fly');
neo.learn('shoot');
neo.learn('dodge');
neo.learn("code");

console.log("neo's skillset: ", neo.skills);