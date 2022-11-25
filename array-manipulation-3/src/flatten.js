/* exported flatten */
// input: an array within an array
// create a new array for storage
// crate a for loop to iterate through each index to check for if the input is an array within an array
// if it's true, push that index into the new array storage
// output: a new array without the child array

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    } else {
      for (var j = 0; j < newArray.length; j++) {
        newArray.push(newArray[j]);
      }
    }
  }
  return newArray;
}
