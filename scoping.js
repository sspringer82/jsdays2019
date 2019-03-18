const a = 'Hallo Welt';
var b = 'Hallo Welt';
let c = 'Hallo Welt';

b += '!';

console.log(b);

function greet(name) {
  let greeting = 'Hallo Basti';
  if (name) {
    //let greeting
    //console.log('1', greeting);
    let greeting = 'Hello ' + name;
    console.log('2', greeting);
  }
  console.log(greeting);
}
greet('Klaus');

const basti = {
  name: 'Basti',
};
basti = 'Klaus';
basti.name = 'Klaus'; // geht

console.log(basti);
