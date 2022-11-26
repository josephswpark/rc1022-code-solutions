/* exported unique */
// input: any JS array
// create a newArray empty storage array
// create a for loop to iterate through the array input
// if the newArray at each index is present at each index of the array,-- use .indexOf()
// .indexOf(searchElement, startIndex)
// then push it into the newArray
// if not, you skip if it doesn't meet the condition
// Return: a new Array containing only the unique elements of array, in the order they first appeared

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
