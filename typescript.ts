import { User } from './module';
import { Greetable } from './greetable';
import { List } from './list';

const basti = new User('basti', 'springer');
console.log(basti.getFullName());

let value = 'foo';
// value = 4;
console.log(value);

function greet(user: Greetable) {
  console.log('Hello ' + user.getFullName());
}

greet(basti);

greet({
  getFullName() {
    return 'Hans-Peter';
  },
});

enum foo {
  schnitzel = 'Kalbsschnitzel mit Pommes',
  knödel = 'Semmelknödel mit etwas Petersilie',
}

const a = foo.schnitzel;
const b = foo.knödel;

if (a === foo.schnitzel) {
  console.log('yummy');
}

const khaled = new User('Khaled', 'Labidi');

const userList = new List<User>();
userList.add(basti);
userList.add(khaled);
// userList.add(4);

console.log(userList.get());
