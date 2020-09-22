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

let getNumber = () => 5;
//17 and 21 are the same function 