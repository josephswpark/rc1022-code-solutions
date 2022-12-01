/* exported isPalindromic */
// input is a string of a word or two words
// split each character of a string into individual ones and then join them together to get rid of the space
// check for the string character from the beginning to the string's character from the back
// if it does not equal, return false
// if it does return true
// return boolean

function isPalindromic(string) {
  var truth = true;
  var together = string.split(' ').join('');
  for (var i = 0; i < together.length - 1; i++) {
    if (together[i] !== together[together.length - i - 1]) {
      truth = false;
    }
  }
  return truth;
}
