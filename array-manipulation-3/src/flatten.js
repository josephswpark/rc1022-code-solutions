/* exported flatten */
// input: an array within an array
// create a new array for storage
// crate a for loop to iterate through each index to check for if the input is an array within an array
// if it's true, push that index into the new array storage
// output: a new array without the child array

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var currentArray = array[i];
    // console.log(currentArray);
    // console.log(!Array.isArray(currentArray));
    if (!Array.isArray(currentArray)) {
      newArray.push(currentArray);
    } else {
      for (var j = 0; j < currentArray.length; j++) {
        newArray.push(currentArray[j]);
      }
    }
  }
  return newArray;
}
