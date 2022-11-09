/* exported invert */
// input: source of that is an object
// make a storage dat of an object
// for in loop to check fo rkey in the source
// change the keys with values
// output: make the value the property and the key into value

function invert(source) {
  var invertedObject = {};
  for (var key in source) {
    invertedObject[source[key]] = key;
  }
  return invertedObject;
}
