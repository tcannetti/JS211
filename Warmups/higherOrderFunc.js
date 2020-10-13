// funcstion that takes in a function
// they can also return functions
// forEach nice shorthand for loops
// used for shorter cleaner code
// makes functional programming possible (idea that you do as much with functions)
// lessens the chance of errors
// 'focus less about the mechanics and more about what you are trying to accomplish' - Yusif

// let printer = function(element, index, collection) {
//   // only want even index elements
//   if(index%2===0){
//   console.log(`${index} = ${element}`);
//   console.log('the entire array is ', collection);
//   if(index == collection.length -1)
//   console.log("------------");
//   }
// }


// let friends = ['Tim', 'Tom', 'Mark', 'Matt'];
// let fruits = ["Apples", "Bananas", "Cantelopes", "Dates", "Elderberry"];

// friends.forEach(printer);
// fruits.forEach(printer);

// filter 

// let mFilter = friends.filter(function(element, index){
//   if(element[0] == "M"){
//     return true;
//   } else {
//     return false;
//   }
// }) 

// filter to just Ms
// let justMs = friends
// .filter(mFilter)
// .forEach(function(element, index){
//   console.log(`${index} = ${element}`)
// });


let pilots = [
  {
    name: "James",
    type: "Jet",
    civilian: true
  },
  {
    name: "Jack",
    type: "Helicopter",
    civilian: true
  },
  {
    name: "Mark",
    type: "Prop",
    civilian: false
  },
  {
    name: "Jennie",
    type: "Helicopter",
    civilian: false
  },
  {
    name: "Amelia",
    type: "Jet",
    civilian: false
  }
];

// create a filter for only civilians
let civilian1 = pilots.filter(element => element.civilian == true);

// map sentences like "Name is a civilian pilot that can fly jets"

let describe = (element) => {
  let description = `${pilots.name} is a pilot that can fly ${pilots.type}`
  return description;
}

pilots.map(describe)
  .forEach(function(element){
    console.log(element);
  })

