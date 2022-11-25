/* exported equal */
// input: first set of an array, second set of an array
// check if second array equal to the first array
// create a for loop to iterate through each index
// return boolean

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < second.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  }
}
