// create a car class
// properties are:
// mpg - number represents how many miles per gallon the car uses 
// tankSize - number for how big the tank is 
// currentFuel - number of gallons of fuel left in the tank 
// odometer - the number of totals miles driven by the car
// an id - the id of the car in our simulation 

// constructor:
// pass in id, mpg, tanksize;
// note that the currentFuel should be set to 0

// addFuel(gallons) method - gallons is how much to add
// this method should not let you overfill the tank, or siphon (no negative numbers)

// distanceToEmpty() 
// should return the number of miles the car can drive before empty. 

// drive(miles) - miles is the number of miles to drive
// this should correctly reduce the current fuel based on miles passed in and mpg
// this should correctly update the odometer property for the car 

class Car{
  // this shows the level of the current tank in gallons
  currentFuel;
  // this holds the total number of miles the car has driven
  odometer;
  // vin type identification
  id;
  // how many gallons the tank can hold
  tankSize;
  // this is the fuel economy 
  mpg;

  /**
   * 
   * @param {string} inputId the id of the car
   * @param {number} inputMpg the miles per gallon economy
   * @param {number} inputTankSize the size of tank in gallons
   */
  constructor(inputId, inputMpg, inputTankSize){
    this.id = inputId;
    this.mpg = inputMpg;
    this.tankSize = inputTankSize;
    this.currentFuel = 0;
    this.odometer = 0;
  }

  /**
   * this method will update the current fuel, and will enforce the capacity defined by the tankSize
   * @param {number} gallons numbers of gallons to add to car
   */
  addFuel(gallons){
    if (gallons < 0) {
      // keeps negative numbers away
      return;
    }
    // compute max allowed gallons
    let emptySpace = this.tankSize - this.currentFuel;

    // if we are adding more fuel than space, than we just fill it up
    if(gallons >= emptySpace){
      this.currentFuel = this.tankSize;
    } else {
      // otherwise we add the gallons to the current fuel
      this.currentFuel = this.currentFuel + gallons;
    }
  }

  /**
   * This method returns the number of miles this car can drive, until out of fuel 
   */
  distanceToEmpty(){
    // know we have to use MPG and current fuel
    return this.mpg * this.currentFuel;
  }


  /** this method sims the car being driven for a number of miles
   * currentFuel and odometer will both be updated 
   * @param {num} miles number of miles
   */
  drive(miles){
    // cannot drive negative distance
    if(miles < 0){
      return;
    } 
    let maxDistance = this.distanceToEmpty();

    let distanceTravelled = maxDistance < miles ? maxDistance : miles;

    // 31mpg, drove 31 miles,-> 1 gallon used
    let fuelUsed = distanceTravelled/this.mpg;

    this.currentFuel = this.currentFuel - fuelUsed;
    this.odometer = this.odometer + distanceTravelled;
  }

}






// TESTS
if( typeof describe == 'function'){
  const assert = require('assert');

  describe("constructor test", function(){
    it('should handle simple constructor', function(){

      let mazda = new Car("1234", 31, 13);
      assert.equal(mazda.id, "1234");
      assert.equal(mazda.mpg, 31);
      assert.equal(mazda.tankSize, 13);
      assert.equal(mazda.currentFuel, 0);
      assert.equal(mazda.odometer, 0);
    })
  })

  describe("adding fuel", function(){
    it('should partially fill tank', function(){
      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(1);
      assert.equal(mazda.currentFuel, 1)

      mazda.addFuel(4);
      assert.equal(mazda.currentFuel, 5);
    })
    it('should not overfill', function(){
      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(15);
      assert.equal(mazda.currentFuel, 13);
    })  
    it('should not allow negative fuel', function(){
      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(10);
      mazda.addFuel(-3);

      assert.equal(mazda.currentFuel, 10);
    })
    it('should not allow overfill #2', function(){
      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(10);
      mazda.addFuel(4);

      assert.equal(mazda.currentFuel, 13);
    })
    it('should allow filling to capacity incrementally', function(){
      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(3);
      mazda.addFuel(2.5);
      mazda.addFuel(4.5);
      mazda.addFuel(1);
      mazda.addFuel(2);

      assert.equal(mazda.currentFuel, 13);
    })
  })

  describe('distance to empty', function(){
    it('when the car has gas', function(){
      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(1);
      assert.equal(mazda.distanceToEmpty(), 31);
    })
    it('when the car has no gas', function(){
      let mazda = new Car("1234", 31, 13);
      assert.equal(mazda.distanceToEmpty(), 0);
    })
    it('when the car is full of gas', function(){
      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(13);
      assert.equal(mazda.distanceToEmpty(), 13*31);
    })
    it('when the car has fractional gas', function(){
      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(1.5);
      assert.equal(mazda.distanceToEmpty, 46.5);
    })
  })
  describe('the drive method', function(){
    it('negative drive distance', function(){
      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(10);
      mazda.drive(-1);
      assert.equal(mazda.odometer, 0);
    })
    it('should not drive if no gas', function(){
      let mazda = new Car("1234", 31, 13);
      mazda.drive(5);
      assert.equal(mazda.odometer, 0);
    })
    it('shoud not drive on fumes', function(){
      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(10);
      mazda.drive(1000);
      assert.equal(mazda.odometer, 310);
      assert.equal(mazda.currentFuel, 0);
    })
    it('normal driving', function(){
      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(10);
      mazda.drive(31);
      mazda.drive(62);
      mazda.drive(15.5);
      assert.equal(mazda.odometer, 108.5);
      assert.equal(mazda.currentFuel, 6.5);
    })
  })
}