/* exported reverseWords */
// input: a string
// split the string and reverse it then join it
// split that again reverse it and then join it again with a space string
// output: a string with the words reversed but in the same order of the word in the string

function reverseWords(string) {
  return string.split('').reverse().join('').split(' ').reverse().join(' ');
}
