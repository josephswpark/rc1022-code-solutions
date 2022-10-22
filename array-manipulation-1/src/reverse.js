/* exported reverse */

function reverse(array) {
  var reversal = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversal.push(array[i]);
  }
  return reversal;
}
