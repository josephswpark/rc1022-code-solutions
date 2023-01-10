/* exported take2nd */

function take2nd(queue) {
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (first === undefined) {
    return undefined;
  } else if (second === undefined) {
    return first;
  }
  queue.enqueue(first);
  return second;
}
