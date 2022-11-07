/* exported ransomCase */
/*
input: string
turn the string into all lowercase
for loop it and do i increment every other
get the substring of the a string to just get the beginning of a string
add the index at 1 to uppercase and then add the rest if condition is not satisfied
return string with every other letter capitalized

*/
function ransomCase(string) {
  var lowerCaseString = string.toLowerCase();
  for (var i = 1; i < string.length; i += 2) {
    lowerCaseString = lowerCaseString.substring(0, i) + lowerCaseString[i].toUpperCase() + lowerCaseString.substring(i + 1);
  }
  return lowerCaseString;
}
