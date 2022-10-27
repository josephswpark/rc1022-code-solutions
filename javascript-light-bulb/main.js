var buttonOn = document.querySelector('.lights');
var backOn = document.querySelector('.light');
var lightsOn = true;

buttonOn.addEventListener('click', function () {
  if (lightsOn === true) {
    buttonOn.className = 'button offs';
    backOn.className = 'off';
  } else {
    buttonOn.className = 'button lights';
    backOn.className = 'light';

  }
  lightsOn = !lightsOn;
});

//  darkButton.className = 'button yellow';
// darkBackground.className = 'light';
/* Use conditional statement and when it is satisfied,
go to the dark-mode.
when it's in the dark-mode, compared the conditional to its
current state, if it's not satisfied then go back to light-mode */
