var a = 'hello';
function doIt(x) {
  x = 'asdf';
}
doIt(a);
console.log(a);

var b = { a: 'value' };
// https://lodash.com/docs/4.17.11#cloneDeep
function doIt(x) {
  // kopie erzeugen, damit nicht die referenz modifiziert wird
  var copy = JSON.parse(JSON.stringify(x));
  copy.a = 'asdf';
  return copy;
}
doIt(b);
console.log(b);
