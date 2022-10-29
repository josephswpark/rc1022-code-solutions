/* exported swapChars */

// input: a string
// change the first index of a string with the with another index
// return a string that is swapped

function swapChars(firstIndex, secondIndex, string) {
  // return string.split(string[firstIndex]);
  // string.replace(string[firstIndex], string[secondIndex]);

  return string.substring(0, firstIndex) +
    string[secondIndex] +
    string.substring(firstIndex + 1, secondIndex) +
    string[firstIndex] +
    string.substring(secondIndex + 1);
}
