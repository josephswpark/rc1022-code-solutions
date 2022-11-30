const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = Number(process.argv[2]);
const y = Number(process.argv[4]);
const expression = process.argv[3];

let result;
if (expression === 'plus') {
  result = add(x, y);
}
if (expression === 'subtract') {
  result = subtract(x, y);
}
if (expression === 'over') {
  result = divide(x, y);
}
if (expression === 'times') {
  result = multiply(x, y);
}

console.log('result:', result);
