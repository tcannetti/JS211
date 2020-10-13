let numbers = [1, 3, 4, 9, 10];

let romanTranslator = function (number) {
  if(number == 1){
    return "I";
  }
  if (number == 2) {
    return "II";
  }
  if (number == 3) {
    return "III";
  }
  if (number == 4){
    return "IV";
  }
  if(number == 5){
    return "V";
  } 
  return number;
}

let romanNumbers = numbers
  .filter(function(element, index){
    if(element <= 5) {
      return true;
    } else {
      return false;
    }
  })
  .map(function(element, index){
    return romanTranslator(element);
});

romanNumbers.forEach(function(element){
  console.log(element);
})

numbers.forEach(function(element){
  console.log(element);
})