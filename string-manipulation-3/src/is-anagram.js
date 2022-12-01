/* exported isAnagram */
// input: string 1 & string 2

// output: return a boolean t

function isAnagram(firstString, secondString) {
  var string1 = firstString.split('').sort().join('').trim();
  var string2 = secondString.split('').sort().join('').trim();
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}
