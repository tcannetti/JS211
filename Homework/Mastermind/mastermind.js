'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess) =>  {
  // code for holding hints
  let solutionArray = solution.split('');
  // using split to confirm string for comparison
  let guessArray = guess.split('');
  // using split to confirm guess for comparison
  let correctLetterLocations = 0;
  // variable for determining correct letters in their correct location
  let correctLetters = 0;
  //varibale for determing correct letters

// In a for loop, iterate over the solutionArray, comparing each index of solutionArray against the same index of guessArray.  
// If the item matches, increment correctLetterLocations, and set that index in solutionArray to null.

 for(let i = 0; i < solutionArray.length; i++){
    if(solutionArray[i] == guessArray[i]){
      correctLetterLocations = correctLetterLocations + 1;
      solutionArray[i] = null;
    }
  };

// Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray. 
// Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray.
// Save that index in a variable called targetIndex. 
// Now, if targetIndex is greater than -1, increment correctLetters and set the item in solutionArray at that index equal to null.

for(let i = 0; i < solutionArray.length; i++){
  let targetIndex = solutionArray.indexOf(guessArray[i]);
  if(targetIndex > -1){
    correctLetters = correctLetters + 1;
    solutionArray[i] = null;
  }
};
// Define a variable called hint that collects the returned value of generateHint(guess). .push the guess and the hint (as a combined string) into the board.
let hint = correctLetters.toString() + "-" + correctLetterLocations.toString();
return hint;

}

// Spec 1 - Detect a correct solution: In mastermind(), if the guess you passed in equals the solution, return 'You guessed it!';

const mastermind = (guess) => {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  // After 10 incorrect guesses, if the board length equals 10, return 'You ran out of turns! The solution was ' and the solution. Otherwise, return 'Guess again.'.
  if(board.length == 10){
    return 'You have run out of guesses. The solution was ' + solution;
  }else {
    if(guess == solution){
      console.log("You Guessed It!");
      return 'You Guessed It!';
    } else {
      board.push('You guessed ', guess + ", you got this many correct " + generateHint(guess));
      console.log('Try Again');
    }
  }
}


const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}