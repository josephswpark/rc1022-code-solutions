/*
As button is clicked, "clicks" count increases while having the p text content to
change as it gets clicked
as clicks count increases, the button color changes when it hits each category
and the class text content changes to the class name in each category
as it hits certain number of the button click count.

less than 4 = cold
less than 7 = cool
less than 10 = tepid
less than 13 = warm
less than 16 is hot
 16 < = nuclear
*/

var count = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', function () {
  count += 1;
  clickCount.textContent = 'Click: ' + count;
  if (count < 4) {
    hotButton.className = 'hot-button cold';
  } else if (count < 7) {
    hotButton.className = 'hot-button cool';
  } else if (count < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (count < 13) {
    hotButton.className = 'hot-button warm';
  } else if (count < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
});
