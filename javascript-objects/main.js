var student = {
  firstName: 'Joseph',
  lastName: 'Park',
  age: 26
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of student:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Ophthalmic Assistant';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Tesla',
  model: 3,
  year: 2021
};

vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);

var pet = {
  name: 'snow',
  type: 'corgi'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
