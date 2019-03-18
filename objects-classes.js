// Objekte deklarieren

const Basti = function() {
  const privateVariable = "test";

  return {
    name: 'Basti',
    age: 'Too young',
  };
};

const bast = Basti();

const obj3 = Object.create({});

function Account(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.name = firstname[0] + lastname;
}

const basti = new Account('Basti', 'Springer');
Account.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
};

Account.createAccount = function(firstname, lastname) {
  return new Account(firstname, lastname);
};
console.log(basti instanceof Account);
console.log(basti.getFullName());

console.log(basti);

const khaled = Account.createAccount('Khaled', 'Labidi');
console.log(khaled);

// Prototypen

const User = function() {};

const user1 = new User();
const user2 = new User();

User.prototype.name = "Basti";

user1.name = "Klaus";

console.log(user1.name); // return Klaus
console.log(user2.name); // return Basti

const obj1 = {
  name: "Basti",
  age: "Too young"
};

console.log(obj1.age);
console.log(obj1["age"]);

obj1.height = 180;
delete obj1.height;

console.log(obj1.height);

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getFuel() {
    console.log("fuel level: 60");
  }
}

class Truck extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }

  // static keyword
  static createTruck() {
    console.log("Truck create!");
  }

  getFuel() {
    super.getFuel();
  }
}

const vehicle = new Vehicle("vw", "polo");
const truck = new Truck("MAN", "XX");

// console.log(vehicle.make, vehicle.model);
console.log(truck.make);
truck.getFuel();
