/* exported take */
/*
input: an array + count
need a data storage of a new array
need to count to limit
push into a new array
output: return a new array of x amount of count you want in
*/

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (array.length === 0) {
      return newArray;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
