/* exported capitalizeWord */
/* input: word
since javascript is strictly that, if the word all lowercase is strictly equal to javascript' than return JavaScript
if not, uppercase the first character of the word and then lowercase the rest
goal: produce the first character capitalize and the rest lower case white
*/

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

}
