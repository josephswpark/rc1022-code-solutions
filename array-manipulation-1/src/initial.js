/* exported initial */
function initial(array) {
  var cutTheLastOne = [];
  for (var i = 0; i < array.length - 1; i++) {
    cutTheLastOne.push(array[i]);
  }
  return cutTheLastOne;
}
