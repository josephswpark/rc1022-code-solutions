/* exported getKeys */

/*
inout: object

output: an array of object's property keys

*/

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
