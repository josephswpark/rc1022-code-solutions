/* exported isUpperCased */

/* input: single word as a string
need to go through each letter of the string to check IF they are ALL CAPS or not
output: boolean to see if the word is ALL CAPS - return true or false */

function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;

  }
  return false;
}
