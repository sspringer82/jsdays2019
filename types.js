console.log('Hallo Workshop');

// primitive Datentypen
// by value

// Strings
var s = '"Str' + 'ing"';
var s2 = "'String'";
var s3 = `Str
ing`;

// Zahlen
var n = 132;
var n = 1.4;

Number.MAX_SAFE_INTEGER;

// booleans
var b = true;

var u = undefined; // so nicht!
var x;
if (x === undefined) {
}
var nix = null;

// composite types
// by reference

// array
var arr = [];
var arr2 = new Array();
// object
var obj = {};
var obj2 = new Object();

// typdefinition
var myString = 'asdf';
myString = true;

// primitive typeninformation
typeof myString === 'string'; // true

// composite typeninformation
myString instanceof Object; // true;

var a = 'Hallo Welt';

// prüft auf truthy values
if (a) {
  //if (a == true) { // niemals == benutzen, immer ===
  console.log(a);
}
