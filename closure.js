function getGreeter() {
  const greeting = 'Hello';
  return function greet(name) {
    return greeting + ' ' + name;
  };
}

const greet = getGreeter();
const halloBasti = greet('Basti');

console.log(halloBasti);

function getUser() {
  const user = {
    firstname: 'Basti',
    age: 'Too young',
  };

  return {
    getName() {
      return user.firstname;
    },
    setName(name) {
      user.firstname = name;
    },
  };
}

const basti = getUser();

basti.setName('Horst');
console.log(basti.getName());
console.log(basti);
