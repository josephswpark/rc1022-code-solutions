/* exported compact */

/* input: array
have a new array for data storage
check for eachh index of an array to omit
output: a new array with omitting false, null, undefined, -0, 0, NaN
*/

function compact(array) {
  var compacted = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compacted.push(array[i]);
    }
  }
  return compacted;
}
