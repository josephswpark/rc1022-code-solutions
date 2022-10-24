/* exported head */

/* CAN'T USE slice, splice, pop, shift

input: array
get the elements at index 0
output: first element of array */

function head(array) {
  var firstIndex = array[0];
  return firstIndex;
}
