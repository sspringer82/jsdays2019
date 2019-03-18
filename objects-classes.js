// Objekte deklarieren
const obj1 = {
  name: 'Basti',
  age: 'Too young',
};

const User = function() {
  const privateVariable = 'test';

  return {
    name: 'Basti',
    age: 'Too young',
  };
};

const user = User();

//const obj3 = Object.create();

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
