// use a do ... while loop to log numbers 1 to 1000
let result = '';
let i = 0;

do{
  i = i + 1;
  result = result + i + " ";
} while (i < 1001);

console.log(result);

// create an object (keys and values) called 'person' with these values:
// firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"

const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "Female"
};

// Create a function that logs out the keys of the object using Object.keys()
console.log(Object.keys(person));

// Create a function that logs out the keys and values of the object using Object.entries().
console.log(Object.entries(person));

// Create an arrayOfPersons that contains multiple "people" objects. 
const arrayOfPersons = [
  {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1922",
  gender: "Female"
  },
  {
  firstName: "John",
  lastName: "Smith",
  birthDate: "June 3, 1969",
  gender: "Male"
  },
  {
  firstName: "Jill",
  lastName: "Jones",
  birthDate: "May 15, 1996",
  gender: "Female"
  },
];

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key 
// birthDate of each object if the birth year is an odd number.

for(const person of arrayOfPersons){
  const yearOfBirth = Number(person.birthDate.slice(-4))
  if(yearOfBirth %2 !== 0){
    console.log(person.firstName + ' has an odd birthday on ' + person.birthDate)
  }
};

// Use .map() to map over the arrayOfPersons and console.log() their information.

let mapIt = arrayOfPersons.map(person => person.lastName.length < 4);
// created a map method to return if the last name is less than 4 

console.log(mapIt);

// Use .filter() to filter the persons array and console.log only males in the array.

let filterIt = arrayOfPersons.filter(person => person.gender === "male")

console.log(filterIt);

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

let millenial = arrayOfPersons.map(person => {
  const yearOfBirth = Number(person.birthDate.slice(-4));
  if(yearOfBirth > 1990){
    return true
  } else {
    return false
  }
})

console.log(millenial);

// Use .filter() to filter the arrayOfPersons and console.log only people that were born before Jan 1, 1990.

let boomer = arrayOfPersons.map(person => {
  const yearOfBirth = Number(person.birthDate.slice(-4));
  if(yearOfBirth < 1990){
      console.log(person)
  } 
})