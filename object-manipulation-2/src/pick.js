/* exported pick */
/*
input: source = object & keys - an array of the property name

new empty object so that we can set the property keys and values

Object.keys will return an array of the keys of the given object
loop through the array of keys
check if the key is found in the source object
if it is, we want to set the key and value for the matched pair in our new object "pickedObject"

Goal: make a new object with specified property and value
*/

function pick(source, keys) {
  var pickedObject = {};
  var sourceObjectKeys = Object.keys(source); // becomes an array of keys in the source
  for (var i = 0; i < Object.length + 1; i++) {
    if (sourceObjectKeys.includes(keys[i])) {
      pickedObject[keys[i]] = source[keys[i]]; // source[keys[i]] is getting the value, not the key it self because of the bracket notation
    }
  }
  return pickedObject;
}
