// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let num = 13;
let n = num.toString();


// Write a JavaScript program to convert a string to the number.
let string = '13';
let s = string.parseInt();


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
console.log('typeof false' , typeof false);
console.log('typeof null' , typeof null);
console.log('typeof myUndefined' , typeof myUndefined);
console.log('typof 6.66' , typeof 6.66);
console.log('typeof NaN' , typeof NaN);
console.log('typeof "JS is Hard!"' , typeof "JS is Hard!");
  

  
// Write a JavaScript program that adds 2 numbers together.
const num1 = 13;
const num2= 23;
let sum = num1 + num2;
console.log('The sum of these numbers is ' + sum + '.');



// Write a JavaScript program that runs only when 2 things are true.
function twoTrue(a) {
  let result;
  if ((a > 0) && (a < 99)) {
    result = 'double true';
  } else {
    result = 'wrong';
  }
  return result;
}

console.log(twoTrue(5));


// Write a JavaScript program that runs when 1 of 2 things are true.
function oneTrue(z) {
  let answer;
  if ((z == 9) || (z < 9)){
    answer = 'truthy';
  } else {
    answer = 'falsey'
  }
  return answer;
}

console.log(oneTrue(10));

// Write a JavaScript program that runs when both things are not true.  
function notTrue(n) {
  let conclusion;
  if (!(n == 2) && !(n > 2)){
    conclusion = 'truthy';
  } else {
    conclusion = 'falsey'
  }
  return conclusion;
}

console.log(notTrue(1));

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
