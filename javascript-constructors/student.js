/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

// eslint-disable-next-line no-redeclare, no-unused-vars
var student = {
  firstName: 'firstName',
  lastName: 'lastName',
  subject: 'subject',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  }

};

Student.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

Student.prototype.getIntroduction = function () {
  return 'Hello, my name is ' + this.firstName + ' ' + this.lastName +
    ' and I am studying ' + this.subject + '.';
};
