/* exported reverseWord */

/*
input: single word string
turn the string characters of word in reverse order
output: reversed word string
*/

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
