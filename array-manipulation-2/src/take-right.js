/* exported takeRight */

/*
input: an array + number of index you want from the end
need a new data array storage
return an empty array if it does not meet the condition when array.length === 0
if count > array.length --> return the OG array
if else, push a new array of the count
push the amount of it to the new array

output: new array the last count of the array
if it's larger thant he length of the array, then return the og array

*/

function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (array.length === 0) {
      return newArray;
    } else if (count > array.length) {
      return array;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
