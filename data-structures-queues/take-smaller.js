/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (first === undefined) {
    return undefined;
  } else if (second === undefined) {
    return first;
  }
  if (second > first) {
    queue.enqueue(second);
    return first;
  } else if (first === second) {
    queue.enqueue(first);
    return second;
  } else if (first > second) {
    queue.enqueue(first);
    return second;
  }
}
