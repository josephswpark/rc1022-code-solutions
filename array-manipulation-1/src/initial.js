/* exported initial */

/* input
input: an array
have an array to store data
only read up to second to last index of an array and exclude the last one from output
output: an array with all index except the last one

*/

function initial(array) {
  var cutTheLastOne = [];
  for (var i = 0; i < array.length - 1; i++) {
    cutTheLastOne.push(array[i]);
  }
  return cutTheLastOne;
}
