/* exported lastChars */

// input: string and get the length starting form the back
// use the slice method and the length form the back so need to use (-)
// return a string from the back
function lastChars(length, string) {
  return string.slice(-length);
}
