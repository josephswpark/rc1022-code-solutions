/* exported tail */
/*
input: array
Need to analyze each array
push a new array without the first one
output: new array with all of the elents EXCLUDING the first one
*/
function tail(array) {
  var cutTheFirstOne = [];
  for (var i = 1; i < array.length; i++) {
    cutTheFirstOne.push(array[i]);
  }
  return cutTheFirstOne;
}
