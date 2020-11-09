let users = [];

// if you are using the  built in implementation provided by the Array Object
users.forEach(function(element, index){

});

//if you are using our implementation
myForEach(function(element, index){
  // do some work 
});



function myForEach(array, callback){
  // write the code that will take the array
  // for each element in the array apply the callback function
}

function myFind(array, callback){
  // write the code that will take the array 
  // and return the first element that meets the criteria provided
  // by the callback
  for (let i =0; i< array.length; i++){
    let element = array[i];
    let match = callback(element, i);
    if(match){
      return element;
    }
  }
  // this return is optional
  // not returning anything is the same as undefined 
  return undefined;
}

function myMap(array, callback) {

}