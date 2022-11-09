/* exported pick */
/*
input: source is an object & keys is an array
1. create a new data storage of an object
2. check for properties in the array of keys
3. declare a variable to the value of source keys
4. if value is not undefined
5. assign the value into the newObject[key]
output: make a new object with keys:value that match keys to source
*/

function pick(source, keys) {
  var newObject = {};
  for (var key of keys) {
    var value = source[key];
    if (value !== undefined) {
      newObject[key] = value;
    }
  }
  return newObject;
}
