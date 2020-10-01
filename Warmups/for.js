'use strict'
/*
let x = 10;

let n = 0;
console.log('number ', 0);
console.log('number ', 1);
console.log('number ', 2);
console.log('number ', 3);
console.log('number ', 4);
console.log('number ', 5);
console.log('number ', 6);
console.log('number ', 7);
console.log('number ', 8);
console.log('number ', 9);
*/


//PART1: what to execute before the loop even starts, ie setting up the loop
//PART2: executes before every iteration, and if truthy, the loop executes onece more, falsey = done. 
//PART3: the actual work to do during the iteration of the loop
//PART4: what you execute at the the end of the iteration to prepare for the next one

//The loop will execute PART1 once
//then execute PART2 to see if you should do the iteration
//if PART2 yes -> execute PART3, then execute PART4, then back to PART2

for(PART1; PART2; PART4){
  PART3;
}

for (let n = 0; n < 10; n = n + 1) {
  console.log("for loop number ", n);
}

