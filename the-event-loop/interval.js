let count = 3;

const intervalID = setInterval(countBackward, 1000);

function countBackward() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}
