/* exported capitalize */

/* input: a string
register there is a string and then turn it into first character capitalize -- register to change the first character into capitalized letter
change the rest to lowercased
output: Capitalize the original word of the first letter and rest will be lowered */

function capitalize(word) {
  var output = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    output += word[i].toLowerCase();
  }
  return output;
}

/* create storage for output string
convert first character to upper case, and save as new first character in output.
convert all remaining characters to lowercase, and concatenate to uppercased first letter stored in output */
