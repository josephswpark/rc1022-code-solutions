/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  for (let i = 0; i < index; i++) {
    const currentFirst = queue.dequeue();
    queue.enqueue(currentFirst);
  }
  const front = queue.dequeue();
  return front;
}
