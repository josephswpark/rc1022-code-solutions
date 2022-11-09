var timeLeft = 4;
var timer = setInterval(function () {
  timeLeft--;
  document.querySelector('.countdown-display').textContent = timeLeft;
  if (timeLeft < 1) {
    clearInterval(timer);
    document.querySelector('.countdown-display').textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
