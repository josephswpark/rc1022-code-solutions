/* exported capitalizeWord */
/* input: word

goal: produce the first character capitalize and the rest lower case white
*/

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

}
