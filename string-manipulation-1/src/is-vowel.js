/* exported isVowel */

/*
input: single string character
check if CHAR has a vowel or not for both uppercase & lowercase
output: return true or false
*/

function isVowel(char) {
  if (char.match(/[aeiou]/gi)) {
    return true;
  }
  return false;
}
