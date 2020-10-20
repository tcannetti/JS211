class Circle {
  radius;

  constructor(inputRadius){
    this.radius = inputRadius;
  }

  /** This method returns the circm of the circle */
  circumference(){
    return 2 * Math.PI *this.radius;

  }
  area(){
    return Math.PI * this.radius * this.radius;
  }

}

let c1 = new Circle(2);
let c2 = new Circle(3);

c1.area();
c1.circumference();
console.log(c1.area());
console.log(c2.circumference());
