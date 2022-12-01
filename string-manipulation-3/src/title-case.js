/* exported titleCase */
// input: a string that is a book title
// assign a null to a variable to assign futures strings to it
// let's split the string into an array if there's a space
// create an array of words that are considered 'minor'
// create a for loop to go through the array that was split
// if the string is greater 3 then turn the first character of the string to uppercase
// if the string is strictly equal to string i, turn that into upper case I
// if the words in [i] index is strictly equal to 'Javascript' or 'Javascript:' then turn that into 'JavaScript' or 'JavaScript:'
// if the word include 'Api' then assign 'API' to that word[i]
// use the join(' ') method to join the string together
// let's split anything that has ': '
// create a foor loop to iterate through each index
// if the array.length = 2, then turn the first character into uppercase
// join(': ') to put it together
// create another variable to split with that has a dash
// create a for loop to iterate through each index
// turn that first character to uppercase and then concatenate to the character at 0
// join them again
// return the variable to get the output
// output: original title with AP title case style applied

function titleCase(title) {
  var newWords = null;
  var wordsArray = title.toLowerCase().split(' ');
  var lowWords = ['the', 'And', 'and', 'or', 'nor', 'but', 'a', 'an', 'as', 'at', 'by', 'for', 'For', 'in', 'In', 'of', 'on', 'per', 'to', 'In', 'The'];
  for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length >= 3) {
      wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
    }
    if (wordsArray[i] === 'i') {
      wordsArray[i] = wordsArray[i].toUpperCase();
    }
    if (lowWords.includes(wordsArray[i])) {
      wordsArray[i] = wordsArray[i].toLowerCase();
    }
    if (wordsArray[i] === 'Javascript') {
      wordsArray[i] = 'JavaScript';
    }
    if (wordsArray[i] === 'Api') {
      wordsArray[i] = 'API';
    }
    if (lowWords.includes(wordsArray[0])) {
      wordsArray[0] = wordsArray[0].charAt(0).toUpperCase() + wordsArray[0].slice(1);
    }
    if (wordsArray[i] === 'Javascript:') {
      wordsArray[i] = 'JavaScript:';
    }
    var capital = wordsArray.join(' ');
    newWords = capital;
  }
  var splitColon = newWords.split(': ');
  for (var a = 0; a < splitColon.length; a++) {
    if (splitColon.length === 2) {
      splitColon[1] = splitColon[1].charAt(0).toUpperCase() + splitColon[1].slice(1);
    }
    var joinColon = splitColon.join(': ');
    newWords = joinColon;
  }
  var splitDash = newWords.split('-');
  for (var j = 0; j < splitDash.length; j++) {
    if (splitDash.length > 1) {
      splitDash[j] = splitDash[j].charAt(0).toUpperCase() + splitDash[j].slice(1);
    }
    var joinDash = splitDash.join('-');
    newWords = joinDash;
  }
  return newWords;
}
