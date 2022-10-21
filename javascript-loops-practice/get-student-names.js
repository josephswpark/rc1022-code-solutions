/* exported getStudentNames */

/*
input: an array of objects with a string name property
output: a new array with only the name

have an array to store data
calculate when to stop which is

need to get value of the property and put it into an array
push into a new array
*/

function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
