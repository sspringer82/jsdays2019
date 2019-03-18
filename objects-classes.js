// Objekte deklarieren
const obj1 = {
  name: "Basti",
  age: "Too young"
};

const User = function() {
  const privateVariable = "test";

  return {
    name: "Basti",
    age: "Too young"
  };
};

const user = User();

const obj3 = Object.create();
