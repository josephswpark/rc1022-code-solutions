/* exported findIndex */

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

// function paramenters: array, value
// function must check the array
// if there is an item that matches the value, return the index
// else, return -1
// check each iteration to see if it equals the value
// if it does, return the index
