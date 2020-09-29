let word = "....."

// is the first letter a vowel?

let firstLetter = word[0];
let vowels = ["a", "e", "i", "o", "u"];

let isFirst = vowels.includes(firstLetter);
console.log(isFirst);

// this function will return the position of the first vowel

let positionOfFirstVowel = function(word){
  for(let indx = 0; indx < word.length; indx ++){
    let letter = word[indx];
    if(vowels.includes(letter)){
      return indx;
    }
  }
}