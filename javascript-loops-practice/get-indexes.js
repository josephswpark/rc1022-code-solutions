/* exported getIndexes */

/* input: any array
output: a new array containied the indexes from the input

create a storage for output
calculate the length of an array to know when to stop
figure out the index of an array
push the stored numbers into an array
return the index
*/

// eslint-disable-next-line no-unused-vars
function getIndexes(array) {
  var index = [];
  for (var i = 0; i < array.length; i++) {
    index.push(array.indexOf(array[i]));
  }
  return index;
}
