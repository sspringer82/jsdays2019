//var sub = undefined;

console.log('add', add(1, 1));
//console.log('sub', sub(2, 1));

// benannte funktion
function add(a, b) {
  arguments[1]; // vergessen!
  return a + b;
}

// anonyme funktion
var sub = function(a, b) {
  return a - b;
};

//var result = add(1); // NaN
var result = add(1, 1); // 2
var result = add(1, 1, 1); // 2

console.log(result);

// implizites undefined als return
var mul = function(a, b) {
  var result = a * b;
  console.log(result);
  // return undefined;
};

// IIFE immediatly invoked function expression
(function() {
  console.log('Hallo Welt');
})();

function div(a, b = 1) {
  // b = b || 1; alt!
  return a / b;
}

console.log('div: ', div(4, undefined));

var arr = [1, 2, 3].map(function(item) {
  return item * item;
});
// keine klammern bei nur 1 parameter
var arr2 = [1, 2, 3].map(item => {
  return item * item;
});

// kein return und geschweifte klammern
var arr3 = [1, 2, 3].map(item => item * item);
console.log(arr2);
