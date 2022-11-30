/* exported zip */
// input: two different arrays, first & second
// create an empty array for storage
// Need to find a method to keep the length of the newArray the smallest index of the parameters - use Math.min()
// create a for loop with a conditional that is i is less than the smallest index of the argument
// push the first[i], second[i] to the newArray
// Return Value: a newArray with the pushed values

function zip(first, second) {
  var newArray = [];
  var lengthOfArray = Math.min(first.length, second.length);
  for (var i = 0; i < lengthOfArray; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
