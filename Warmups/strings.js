//the hold text info
// they go in quotes
// if they hold a number it is not a "number"
// they are truthy except for an empty string
// string have a size/ length

let name = "John"
console.log(name);
// expect John
console.log("size of name = " , name.length);
// how to get the character length
// "/t" adds tab spacing but only counts as 1 character
// "/n" creates a new line and still counts as 1 character

let friends = ["Ryan", "Theo", "Josh", "Trent", "Levi"];
console.log("I have this many friends = ", friends.length);
// expect 5
console.log("My first friend is ", friends[0]);
// expect Ryan
console.log("My most recent friend is ", friends[3]);
// expect Levi

let myFirstFriend = friends[0];
console.log(myFirstFriend);
//expect the first listed friend. 
friends[0] = 'Brad';
// should now assign Brad to the first spot in the friends array 

let friends = ["Ryan", "Theo", "Josh", "Trent", "Levi"];
console.log(friends);

let lastIndex = friends.length -1;
let tmp = friends[0];
friends[0] = friends[lastIndex];
friends[lastIndex] = tmp;
// 
console.log('fist and last swapped' , friends);

friends.push('Megan')
console.log('Adding Megan to the array' , friends);


// same result with function
function swap(theArray) {
  // get 1st element of array
  let first = theArray[0];

  //get the index of the last element in array
  let lastIndex = theArray.length -1;

  //use the index of the last element to get the last element in the array 
  let last = theArray[lastIndex];

  // update the array by putting the last element at the beginning of the array
  theArray[0] = last;

  //update the array by putting the first element at the end of the array 
  theArray[lastIndex] = first;
}

// split
// join 
// indexOf
// includes

// substring, (start, end)
// substr (start, end)
 let word = 'dictionary';
 console.log('Word = ', word)
 let size = word.length;
 console.log("size = ", word.length);

 let hasT = word.includes("t");
 console.log("Word has a T = " , hasT);

 let positionT = word.indexOf('t');
 console.log('Position of T = ', positionT);

 // i want 'dict', starts at position 0,
 // and goes up to  but not includint position 4

 let partial = word.substring(0, 4);
 console.log('partial = ', partial);

 // want the word 'nar
 let partial2 = word.substr(6, 3);
 console.log('partial2 = ', partial2);
