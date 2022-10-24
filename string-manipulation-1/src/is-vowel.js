/* exported isVowel */

/*
input: single string character
check if CHAR has a vowel or not for both uppercase & lowercase
output: return true or false
*/

function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
