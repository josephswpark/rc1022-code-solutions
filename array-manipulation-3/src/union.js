/* exported union */
// union(first, second)
// Parameters
// first - Any JavaScript Array
// second - Any JavaScript Array
// Return Value
// A new Array containing unique values from both first and second in the order they appear.

//   Examples
// union([2, 1], [2, 3]);
// // -> [2, 1, 3]
// union(['html', 'css', 'javascript'], ['php', 'css', 'sql']);
// // -> ["html", "css", "javascript", "php", "sql"]
// union(
//   ['a', 'link', 'to', 'the', 'past'],
//   ['the', 'adventure', 'of', 'link']
// )
// // -> ["a", "link", "to", "the", "past", "adventure", "of"]

// input: an array
//
// return: a new array containing values from both first and second in the order they appear

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (newArray.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (var a = 0; a < second.length; a++) {
    if (newArray.indexOf(second[a]) === -1) {
      newArray.push(second[a]);
    }
  }
  return newArray;
}
