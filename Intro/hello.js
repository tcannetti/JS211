function hello(){
  console.log("Hello Howdy");
}

let hello2 = function(){
  console.log("Hello Howdy");
}

let hello3 = () => {
  console.log("Hello Howdy");
}

hello();
hello2();
hello3();

let getNumber = () => {
  return 5;
}

let getNum = () => 5;
//17 and 21 are the same function 

let now = new Date();
console.log(now);

let age = 8;
let ageAsString = age.toString();
console.log(ageAsString);

let num = '8';
// let string = num.parseInt();
console.log(string);