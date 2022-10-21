/* eslint-disable no-unused-vars */
/* exported getWords */

/*
input: string with 0 or more wrods, separated by spaces
need data storage to hold an array
use .split method - break the string up into segments on each space character
output: an array of strings and separates the string if there is 2 or more words in a string given */

function getWords(string) {
  var words = [];
  if (string === '') {
    return [];
  }
  var splitted = string.split(' ');
  return splitted;
}
