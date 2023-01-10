/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  while (queue.peek() !== undefined) {
    const first = queue.dequeue();
    if (first <= queue.peek()) {
      return first;
    } else if (first > queue.peek()) {
      queue.enqueue(first);
    } else {
      return first;
    }
  }
}
