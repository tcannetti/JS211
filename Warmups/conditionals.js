let grade = 69;

if (grade >= 90) {
  alert('GREAT A!');
} else if(grade > 79){
  alert('B is fine');
} else if(grade <= 69){
  console.log('I was hoping for a C');
}

console.log('Your grade is ' + grade);

// code that will check if grade is 90 or above
// if 90 should print "that is a nice A"
//otherwise print "better luck next time"


let hungry = "very"; //little, no

//write some code that will print 
// hungry => 'full size meal'
// little => 'grab a snack'
// no => 'sounds good, save it for later'

if (hungry == "very") {
  console.log("full size meal");
} else if (hungry == "little") {
  console.log("grab a snack");
} else if (hungry == "no") {
  console.log("sounds good, save it for later");
}
console.log("hungry");


console.log("is 3 == 3 =>", (3==3));
console.log("is 3 == '3' =>", (3 == '3'));

let x = true;
if(x){
  console.log("It is a truthy");
} else {
  console.log('It is falsey');
}

let handsome;
let rich;
let tall;

if (handsome && rich) {
  console.log('sign me up!');
} else if (handsome || tall) {
  console.log('i can live with that');
} else if (rich) {
  console.log('I probably can make it work');
}


let color; // red, blue, purple
let type; // sedan, coupe, truck, suv

//write some code that will print 
// red, yes
// coupe, yes
// blue sedan, yes
// purple suv, yes

// white, no
// sedan that is any color other than black or blue, no
// suv other than purple, no 

// everything else, maybe 

if(color === "red") {
  console.log("Buy")
}
else if(type === "sports") {
  console.log("Buy it")
}
else if(type === 'sedan' && color == 'blue'){
  console.log('buy buy');
}
else if(type === 'suv' && color == 'purple'){
  console.log('get it');
}
else if (color === 'white'){
  console.log('no');
}
else if(type == 'sedan' && (color !== 'blue' || color == 'black')){
  console.log('nah');
}
else if(type == 'suv' && color !== 'purple'){
  console.log('no way');
}
else {
  console.log('maybe');
}



//this is a function that will return whatever you send it 

let echo = function(input){
  return input;
}

let x = echo(7);
console.log(x);

//this function will add two numbers sent in
let add = function(a,b) {
  let sum = a + b;
  return sum;
}

let z = add(5,12);
console.log(add);