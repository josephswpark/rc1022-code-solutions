/* exported union */
// input: an array
// create an empty array for storage
// iterate through first array to check if it exists in the newArray, if not, push that value into newArray
// iterate through second array to check if it exists in the newArray, if not, push that value into that newArray
// return: a new array containing values from both first and second in the order they appear

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (newArray.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (var a = 0; a < second.length; a++) {
    if (newArray.indexOf(second[a]) === -1) {
      newArray.push(second[a]);
    }
  }
  return newArray;
}
