var modal = document.querySelector('.modal');
var trigger = document.querySelector('.trigger');
var noButton = document.querySelector('.no-button');

trigger.addEventListener('click', function () {
  modal.classList.toggle('show-modal');

});

noButton.addEventListener('click', function () {
  modal.classList.remove('show-modal');
});
