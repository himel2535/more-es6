// inheritance-->

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed, age) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
  type() {
    console.log(`${this.name} is the type of ${this.breed} product dog`);
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  meow() {
    console.log(`${this.name} is meowing`);
  }
  define() {
    console.log(
      `${this.name} has ${this.color} in the body and ${this.age} years old`
    );
  }
}
class Bird {
  constructor(name, age, flying) {
    this.name = name;
    this.age = age;
    this.flying = flying;
  }
  age() {
    console.log(`${this.age} years old`);
  }
  sound() {
    console.log(`${this.name} is kicir-micir`);
  }
  define() {
    console.log(
      `${this.name} can make ${this.flying} in the sky and ${this.age} years old`
    );
  }
}

const bird1 = new Bird("moyna", 1, "flying");
// bird1.define();

const cat1 = new Cat("pussy", 2, "red");
cat1.define();
cat1.eat();

const dog1=new Dog('shepherd','germany',3)
dog1.eat();

// const dog1=new Dog('Don','deshi',2);
// dog1.eat()
// dog1.bark()
// dog1.type()
// // console.log(dog1)

// const cat1=new Cat("marjar",3,'red');
// cat1.eat();
// cat1.meow();
// cat1.define();
