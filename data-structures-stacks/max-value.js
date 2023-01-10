/* exported maxValue */

function maxValue(stack) {
  let biggest = -Infinity;
  while (stack.peek() !== undefined) {
    const current = stack.pop();
    if (current >= biggest) {
      biggest = current;
    }
  }
  return biggest;
}
