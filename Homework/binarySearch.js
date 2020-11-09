// what are algorithms
// instructions for the computer to run and solve problems


let fruits = ['apple', 'banana', 'cucumber', 'date', 'edemame','fig','grapes','habenero','itta','jalepeno','kumquat','lemon','mango','nectarine','orange','pineapple','quince','raspberry','strawberry','tangerine','ugly fruit','vanilla bean','watermelon', 'xigya','yunnan hackberry','zuchinni'];


/**
 * Perform binary search to see if the needle element is in the haystack array
 * @param {*} haystack a sorted array of elements to look for
 * @param {*} needle element to look for
 */
function binarySearch(haystack, needle){
  let min = 0;
  let max = haystack.length;

  while(min <= max){

    let mid = parseInt(min + max)/2; // to round to whole number
    let element = haystack[mid];

    if(needle < element){
      max = mid - 1;
    } else if(needle > element){
      min = mid + 1;
      // max stays the same
    } else {
      return true;
    }
  } 
  return false;
}

console.log('is trumpet in my fruits?', binarySearch(fruits, "trumpet"));
console.log('is watermelon in my fruits?', binarySearch(fruits, "watermelon"));

/** 
 * return true if the needle element is in the haystack array
 * 
 * @param {array} haystack the list element to go through
 * @param {*} needle the element to look for
 */
function simpleSearch(haystack, needle){
  for(let i =0; i< haystack.length; i++){
    if(needle == haystack[i]){
      return true;
    }
  }
  return false;
}