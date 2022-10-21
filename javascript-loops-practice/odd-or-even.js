/* exported oddOrEven */

// function parameter: numbers
// function check the array
// check for even and odd numbers in the array, return a new array of even and odd

function oddOrEven(numbers) {
  var oddOrEvenArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenArray.push('even');
    } else {
      oddOrEvenArray.push('odd');
    }
  }
  return oddOrEvenArray;
}
