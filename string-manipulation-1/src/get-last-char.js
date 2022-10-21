/* exported getLastChar */

/* parameter - a string
need to recgonize that it is a string
calculate the last string of a string
output - last character or index of a string
*/

function getLastChar(string) {
  var lastChar = string.length - 1;
  // eslint-disable-next-line no-empty
  if (string === '') {
  }
  return string[lastChar];
}
