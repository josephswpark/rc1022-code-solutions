/* exported intersection */
// input: two different arrays
// create an empty array for storage
// create a for loop to iterate through each first array and if it overlaps, push it to newArray
// create a for loop to iterate through each SECOND array and if it overlaps, push it to newArray
// Return: an array of values that existed in both first & second array;

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
