/* exported truncate */

// input: a string and length of the string to be cut
// cut the string from 0 to the length amount and then add the ...
// if not, just reuturn the dots
// retunrn  a string with "..." added after it
function truncate(length, string) {
  if (string.length > length) {
    return string.slice(0, length) + '...';
  } else {
    return string + '...';
  }
}
