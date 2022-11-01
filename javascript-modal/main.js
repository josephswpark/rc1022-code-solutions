/* eslint-disable no-unused-vars */
var modal = document.querySelector('.modal');
var trigger = document.querySelector('.trigger');
var noButton = document.querySelector('.no-button');

function onClick() {
  modal.classList.toggle('show-modal');
}

trigger.addEventListener('click', onClick);
noButton.addEventListener('click', onClick);
