/* eslint-disable no-unused-vars */
var modal = document.querySelector('.modal');
var trigger = document.querySelector('.trigger');
var noButton = document.querySelector('.no-button');

function onClick() {
  modal.classList.toggle('show-modal');
}

function popUpClick(event) {
  if (event.target === modal) {
    modal.classList.remove('show-modal');
  }
}

trigger.addEventListener('click', onClick);
noButton.addEventListener('click', onClick);

/* trigger.addEventListener('click', function () {
  modal.classList.toggle('show-modal');

});

noButton.addEventListener('click', function () {
  modal.classList.remove('show-modal');
}); */
