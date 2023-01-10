/* exported postpone */

function postpone(queue) {
  const back = queue.peek();
  if (back === undefined) return;
  return queue.enqueue(queue.dequeue());
}
