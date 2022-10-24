/* exported reverse */
/*
input: an array
have a new array for data storage
read and return the array in reverse
output: new array in reversved form */

function reverse(array) {
  var reversal = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversal.push(array[i]);
  }
  return reversal;
}
