/* exported setValue */

/*

input: object, string, new value
Need to update the key with a new value
output: nothing
*/

function setValue(object, key, value) {
  object[key] = value;
  return object.key;
}
