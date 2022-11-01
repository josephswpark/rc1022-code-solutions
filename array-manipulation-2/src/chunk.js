/* exported chunk */

function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    if (array.length === 0) {
      return newArray;
    } else {
      newArray.push(array.slice(i, i + size));
    }
  }
  return newArray;
}
