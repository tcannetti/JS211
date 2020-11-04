console.log("loading breakingBad.js");

let getWalter = function(){

  // let randomNumber = Math.random();
  let fetchPromise = fetch('https://www.breakingbadapi.com/api/character/random');
  let responsePromise = fetchPromise.then(function(response){
    console.log(response);
    return response.json();
  })
  responsePromise.then(function(json){
    // let url = URL.createObjectURL(image);
    console.log(json);
  })
}

getWalter();


// use class example  apiPractice 
