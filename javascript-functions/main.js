function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log('minutes to seconds:', convertMinutesToSecondsResults);

function greet(name) {
  var firstName = 'Hey, ' + name;
  return firstName;
}
var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var getAreaResults = getArea(17, 42);
console.log('value of area:', getAreaResults);

function getFirstName(person) {
  var name = person.firstName;
  return name;
}
var getFirstNameResults = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('value of firstName:', getFirstNameResults);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
// var numberOfElements = getLastElementResults.length;
// var lastIndex = numberOfElements - 1;
// var lastElement = getLastElementResults[lastIndex];
console.log('the value of the lastElement:', getLastElementResults);
