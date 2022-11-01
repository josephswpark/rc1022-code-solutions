/* exported numVowels */
/* input: string
do a for loop and run an if statement check for all the vowels including capitaled

output: count of vowels present in a string
*/

function numVowels(string) {
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' ||
    string[i] === 'e' ||
    string[i] === 'i' ||
    string[i] === 'o' ||
    string[i] === 'u' ||
    string[i] === 'A' ||
    string[i] === 'E' ||
    string[i] === 'I' ||
    string[i] === 'O' ||
    string[i] === 'U') {
      vowelCount += 1;
    }
  }
  return vowelCount;
}
