/* exported isLowerCased */

/*
input -- a single word of a string
check each letter of a string to see if it's lowercased or not
output- boolean - true or false if the word is all lowercased */

function isLowerCased(word) {
  if (word.toLowerCase() === word) {
    return true;
  }
  return false;
}
