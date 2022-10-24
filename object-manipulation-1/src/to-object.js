/* exported toObject */

/*
input: an array with two elements & string key and value
turn the index of array into string
turn the strings into property: value or key:value
output: an object with one property
  turning strings into key:value */

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
