class Vehicle {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
  getThis() {
    console.log(this);
  }
  getPrice() {
    return this.price;
  }
}
const car1 = new Vehicle("car");
// car1.getThis()

const car2 = new Vehicle("lamborgini", 5000000);
// console.log(car2.getPrice())


// in normal function if we apply this then full object meaning but in arrow function doesn't keep it up -->
const student = {
  name: "monwar",
  score: 10000,
  getScore: function () {
    console.log(this);
  },
  getScoreArrow:()=>{
    console.log(this)
  }
}
// student.getScore();
student.getScoreArrow();



// for encapsulation-->

class Vehicle2 {
    #tin
  constructor(type, price) {
    this.type = type;
    this.price = price;
    this.#tin='12345'
  }
  getThis() {
    console.log(this);
  }
  getPrice() {
    return this.price;
  }
  getTin(){
    console.log(this.#tin)
  }
}
const bike = new Vehicle("bike",1000);
// bike.getThis();
console.log(bike.getPrice())

// this is private thats why doesn't work on external but in internal of class it will work with relax-->
console.log(bike.#tin)
