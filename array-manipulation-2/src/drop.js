/* exported drop */
// input: an array and a number of index to remove from the beginning
// create a new array data storage
// create a foor loop that starts at the count index up until length of the array
// push the each index into the new array
// return the new array

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    if (array.length === 0) {
      return newArray;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
