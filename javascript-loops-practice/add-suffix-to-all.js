/* exported addSuffixToAll */
/*
input an array of strings
output: new array with each word having a suffix to the words

have an array to store the new values
amount of strings to calculate to add the suffix
push the new array into an empty array
*/

function addSuffixToAll(words, suffix) {
  var word = [];
  for (var i = 0; i < words.length; i++) {
    word.push(words[i] += suffix);
  }
  return word;
}
