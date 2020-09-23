//create 2 variables, 1 is a string and 1 is a number 
//create a variable that is the sum of those variables

let name = "Taylor";
let num = 30;
let sum = name + ' is ' + num;
console.log(sum);

//create function that prints out 'Hello Taylor' and call it 2 tinmes
let f1 = function () {
  console.log('Hello Taylor');
}

f1();
f1();

function f2() {
  console.log('Hello John');
}

f2();
f2();

let f3 = () => {
  console.log('Hello Person');
}

f3();
f3();