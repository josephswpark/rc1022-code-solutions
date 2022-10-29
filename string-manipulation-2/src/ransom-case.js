/* exported ransomCase */
function ransomCase(string) {
  var lowerCaseString = string.toLowerCase();
  for (var i = 1; i < string.length; i += 2) {
    lowerCaseString = lowerCaseString.substring(0, i) + lowerCaseString[i].toUpperCase() + lowerCaseString.substring(i + 1);
  }
  return lowerCaseString;
}
