/* exported getIndexes */

/* input: any array
output: a new array containied the indexes from the input

create a storage for output
calculate the length of an array to know when to stop
figure out the index of an array
push the stored numbers into an array
return the index
*/

function getIndexes(array) {
  var index = [];
  for (var i = 0; i < array.length; i++) {
    index.push(i);
  }
  return index;
}
/* parameter is an array
create a storage to push a new array into
will go into each iteration to check if there is anything inside an array
need to get the indexes of the array items into a new array
push the new array */
