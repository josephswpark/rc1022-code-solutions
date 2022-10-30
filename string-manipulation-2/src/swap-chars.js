/* exported swapChars */

// input: a string
// get the firstIndex you want to change
// and replace it with the secondIndex of a string
//
// get the firstIndex of a string
// replace it at the spot of a secondIndex + 1 into the new string
// return a string that is swapped

function swapChars(firstIndex, secondIndex, string) {
  return string.substring(0, firstIndex) +
    string[secondIndex] +
    string.substring(firstIndex + 1, secondIndex) +
    string[firstIndex] +
    string.substring(secondIndex + 1);
}
