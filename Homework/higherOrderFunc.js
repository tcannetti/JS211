/* 
By now you should very much know how to build higher-order functions from scratch. Today you will warm-up on the more important and useful higher order functions: .map(), .reduce() and .filter().

Whiteboard, make a code plan and build each of the following methods:
.map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.
.reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
.filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.
Create a repo called "Higher-Order-From-Scratch".
Practice working from branches by creating a new branch called: "HigherOrder".
Place your code in a file called main.js.
Create a pull request (PR) for Higher-Order-From-Scratch to be merged into master.
*/

const mainArray = ["Nike", "Adidas", "Puma", "Vans", "Converse", "New Balance", "Salomon", "Brooks"]
// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.

const myMap = (array, func) => {
  let mapped = [];
  for(index = 0; index <= array.length; index++){
    mapped.push(func(array[index]))
  }
  return mapped;
}

let one = mainArray.map(element => element + " shoes")
let two = myMap(mainArray, element => element + " shoes")

console.log("The easy way to map", one);
console.log("The hard way to map", two);

// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
const amounts = [23, 13, 7, 43];

const reduceScratch = (array, func) => {
  let initialValue = 0;
  for(let index = 0; index < array.length; index++){
    let addition = array[index];
    initialValue = func(initialValue, addition)
  }
  return initialValue;
}

const addingFunc = (num1, num2) => {
  return num1 + num2;
}

console.log(reduceScratch(amounts, addingFunc));

let higherReduce = amounts.reduce((total, currentValue) => total + currentValue);
console.log("The easy way to reduce returns ", higherReduce);


// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.

const filterScratch = (array, func) => {
  let filtered = [];
  for(let index = 0; index < array.length; index++){
    if(func(array[index])){
      filtered.push(array[index])
    }
  }
  return filtered;
}

const lengthFunc = (word) => {
  if(word.length <= 4){
    return true;
  }
}

console.log(filterScratch(mainArray, lengthFunc));

let higherFilter = mainArray.filter(element => element.length <= 4);
console.log("The easy filter returns ", higherFilter);