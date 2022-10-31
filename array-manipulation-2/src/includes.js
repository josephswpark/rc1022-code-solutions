/* exported includes */
/*
input: an array and the value to be looked for in the array
for loop to go through the array

output: boolean of if value is present at any index in the array

*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value || array[i] === value - 1) {
      return true;
    }
  }
  return false;
}
