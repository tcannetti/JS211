if( expect === actual){
  console.log('all good');
} else {
  console.log('test failed');
}


//bringing in the assert library we will use for tests
const assert = require('assert');

// this function should add 2 numbers and return sum;
function add(num1, num2) {
  return num1 + num2;
}

// we are going to write 2 suites


//test suit 1
describe('should work for small numbers', function(){
  it('should work for small numbers', function(){
    let expected = 9;
    let actual = add(4,5);
    assert.equal(actual, expected);
  }