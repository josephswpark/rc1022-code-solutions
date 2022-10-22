/* exported getValues */

/*
input: object
have an array for storage
push the values into the array
output: an array of the value */

function getValues(object) {
  var values = [];
  for (var value in object) {
    values.push(object[value]);
  }
  return values;
}
