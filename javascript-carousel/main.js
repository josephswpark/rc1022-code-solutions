var imgArray = [
  'images/025.png',
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/039.png'];

var currentIndex = 0;
var intervalId = setInterval(goThruImages, 3000);

var image = document.querySelector('.each-image');

var circleList = document.querySelectorAll('.fa-circle');
var circleContainer = document.querySelector('.carousel-circles');

function goThruImages() {
  if (currentIndex === imgArray.length - 1) {
    circleList[currentIndex].classList.replace('fa-solid', 'fa-regular');
    currentIndex = 0;
    image.setAttribute('src', imgArray[currentIndex]);
    circleList[currentIndex].classList.replace('fa-regular', 'fa-solid');
  } else {
    circleList[currentIndex].classList.replace('fa-solid', 'fa-regular');
    currentIndex++;
    image.setAttribute('src', imgArray[currentIndex]);
    circleList[currentIndex].classList.replace('fa-regular', 'fa-solid');
  }
  updateImage();
}

var rightArrow = document.querySelector('.right-arrow');
rightArrow.addEventListener('click', clickRight);

function clickRight(event) {
  if (event.target && event.target.matches('.right-arrow')) {
    clearInterval(intervalId);
  }
  if (currentIndex === imgArray.length - 1) {
    circleList[currentIndex].classList.replace('fa-solid', 'fa-regular');
    currentIndex = 0;
    circleList[currentIndex].classList.replace('fa-regular', 'fa-solid');
  } else {
    circleList[currentIndex].classList.replace('fa-solid', 'fa-regular');
    currentIndex++;
    circleList[currentIndex].classList.replace('fa-regular', 'fa-solid');
  }
  intervalId = setInterval(goThruImages, 3000);
  updateImage();
}

var leftArrow = document.querySelector('.left-arrow');
leftArrow.addEventListener('click', clickLeft);

function clickLeft(event) {
  if (event.target && event.target.matches('.left-arrow')) {
    clearInterval(intervalId);
    intervalId = setInterval(goThruImages, 3000);
  }
  if (currentIndex === 0) {
    circleList[currentIndex].classList.replace('fa-solid', 'fa-regular');
    currentIndex = imgArray.length - 1;
    circleList[currentIndex].classList.replace('fa-regular', 'fa-solid');
  } else {
    circleList[currentIndex].classList.replace('fa-solid', 'fa-regular');
    currentIndex--;
    circleList[currentIndex].classList.replace('fa-regular', 'fa-solid');
  }
  updateImage();
}

function updateImage() {
  image.setAttribute('src', imgArray[currentIndex]);
}

circleContainer.addEventListener('click', updateButtons);

function updateButtons(event) {
  if (event.target && event.target.classList.contains('fa-circle')) {
    clearInterval(intervalId);
    circleList[currentIndex].classList.replace('fa-solid', 'fa-regular');
    currentIndex = parseInt(event.target.getAttribute('id'));
    circleList[currentIndex].classList.replace('fa-regular', 'fa-solid');
    updateImage();
    intervalId = setInterval(goThruImages, 3000);
  }
}
