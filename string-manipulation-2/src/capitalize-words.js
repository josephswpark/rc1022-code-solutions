/* exported capitalizeWords */
/*
input: word as a string
if there are two words, split it into an array
for loop it
first words at character 0, uppercase it and then at the same word, at index 1, make it lowercase
run thru the for loop until condition is not met
need to return the words back into the string so use .join
output: a new string with every word's first letter capitalizaed

*/

function capitalizeWords(string) {
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }
  return words.join(' ');
}
