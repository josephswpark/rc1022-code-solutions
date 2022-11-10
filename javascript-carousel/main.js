var imageCount = 1;
var intervalId = setInterval(goThruImages, 3000);

var image = document.querySelector('.each-image');
var icon1 = document.querySelector('.one');
var icon2 = document.querySelector('.two');
var icon3 = document.querySelector('.three');
var icon4 = document.querySelector('.four');
var icon5 = document.querySelector('.five');

function goThruImages() {
  imageCount++;
  if (imageCount === 2) {
    image.setAttribute('src', 'images/001.png');
    icon1.classList.replace('fa-solid', 'fa-regular');
    icon2.classList.replace('fa-regular', 'fa-solid');
  }
  if (imageCount === 3) {
    image.setAttribute('src', 'images/004.png');
    icon2.classList.replace('fa-solid', 'fa-regular');
    icon3.classList.replace('fa-regular', 'fa-solid');
  }
  if (imageCount === 4) {
    image.setAttribute('src', 'images/007.png');
    icon3.classList.replace('fa-solid', 'fa-regular');
    icon4.classList.replace('fa-regular', 'fa-solid');
  }
  if (imageCount === 5) {
    image.setAttribute('src', 'images/039.png');
    icon4.classList.replace('fa-solid', 'fa-regular');
    icon5.classList.replace('fa-regular', 'fa-solid');
  }
  if (imageCount > 5) {
    image.setAttribute('src', 'images/025.png');
    icon5.classList.replace('fa-solid', 'fa-regular');
    icon1.classList.replace('fa-regular', 'fa-solid');
    imageCount = 1;
  }
}

var rightArrow = document.querySelector('.right-arrow');
rightArrow.addEventListener('click', goToTheNextImageButton);

function goToTheNextImageButton(event) {
  imageCount++;

  if (event.target && event.target.matches('.right-arrow')) {
    clearInterval(intervalId);
    intervalId = setInterval(goThruImages, 3000);
  }
  if (imageCount === 2) {
    image.setAttribute('src', 'images/001.png');
    icon1.classList.replace('fa-solid', 'fa-regular');
    icon2.classList.replace('fa-regular', 'fa-solid');
  }
  if (imageCount === 3) {
    image.setAttribute('src', 'images/004.png');
    icon2.classList.replace('fa-solid', 'fa-regular');
    icon3.classList.replace('fa-regular', 'fa-solid');
  }
  if (imageCount === 4) {
    image.setAttribute('src', 'images/007.png');
    icon3.classList.replace('fa-solid', 'fa-regular');
    icon4.classList.replace('fa-regular', 'fa-solid');
  }
  if (imageCount === 5) {
    image.setAttribute('src', 'images/039.png');
    icon4.classList.replace('fa-solid', 'fa-regular');
    icon5.classList.replace('fa-regular', 'fa-solid');
  }
  if (imageCount > 5) {
    image.setAttribute('src', 'images/025.png');
    icon5.classList.replace('fa-solid', 'fa-regular');
    icon1.classList.replace('fa-regular', 'fa-solid');
    imageCount = 1;
  }
}

var leftArrow = document.querySelector('.left-arrow');
leftArrow.addEventListener('click', goToPreviousImage);

function goToPreviousImage(event) {
  imageCount--;
  if (event.target && event.target.matches('.left-arrow')) {
    clearInterval(intervalId);
    intervalId = setInterval(goThruImages, 3000);
  }
  if (imageCount === 0) {
    image.setAttribute('src', 'images/039.png');
    icon5.classList.replace('fa-regular', 'fa-solid');
    icon1.classList.replace('fa-solid', 'fa-regular');
    icon4.classList.replace('fa-solid', 'fa-regular');
    imageCount = 5;
  }
  if (imageCount === 1) {
    image.setAttribute('src', 'images/025.png');
    icon1.classList.replace('fa-regular', 'fa-solid');
    icon2.classList.replace('fa-solid', 'fa-regular');
  }
  if (imageCount === 2) {
    image.setAttribute('src', 'images/001.png');
    icon2.classList.replace('fa-regular', 'fa-solid');
    icon3.classList.replace('fa-solid', 'fa-regular');
  }
  if (imageCount === 3) {
    image.setAttribute('src', 'images/004.png');
    icon3.classList.replace('fa-regular', 'fa-solid');
    icon4.classList.replace('fa-solid', 'fa-regular');
  }
  if (imageCount === 4) {
    image.setAttribute('src', 'images/007.png');
    icon4.classList.replace('fa-regular', 'fa-solid');
    icon5.classList.replace('fa-solid', 'fa-regular');
  }
}

var circleOne = document.querySelector('.one');
var circleTwo = document.querySelector('.two');
var circleThree = document.querySelector('.three');
var circleFour = document.querySelector('.four');
var circleFive = document.querySelector('.five');

circleOne.addEventListener('click', clickToGoToOne);
function clickToGoToOne(event) {
  if (event.target && event.target.matches('.one')) {
    clearInterval(intervalId);
    intervalId = setInterval(goThruImages, 3000);
    imageCount = 1;
    image.setAttribute('src', 'images/025.png');
    icon1.classList.replace('fa-regular', 'fa-solid');
    icon5.classList.replace('fa-solid', 'fa-regular');
    icon4.classList.replace('fa-solid', 'fa-regular');
    icon3.classList.replace('fa-solid', 'fa-regular');
    icon2.classList.replace('fa-solid', 'fa-regular');
  }
}

circleTwo.addEventListener('click', clickToGoToTwo);
function clickToGoToTwo(event) {
  if (event.target && event.target.matches('.two')) {
    clearInterval(intervalId);
    intervalId = setInterval(goThruImages, 3000);
    imageCount = 2;
    image.setAttribute('src', 'images/001.png');
    icon2.classList.replace('fa-regular', 'fa-solid');
    icon5.classList.replace('fa-solid', 'fa-regular');
    icon4.classList.replace('fa-solid', 'fa-regular');
    icon3.classList.replace('fa-solid', 'fa-regular');
    icon1.classList.replace('fa-solid', 'fa-regular');
  }
}

circleThree.addEventListener('click', clickToGoToThree);
function clickToGoToThree(event) {
  if (event.target && event.target.matches('.three')) {
    clearInterval(intervalId);
    intervalId = setInterval(goThruImages, 3000);
    imageCount = 3;
    image.setAttribute('src', 'images/004.png');
    icon3.classList.replace('fa-regular', 'fa-solid');
    icon5.classList.replace('fa-solid', 'fa-regular');
    icon4.classList.replace('fa-solid', 'fa-regular');
    icon1.classList.replace('fa-solid', 'fa-regular');
    icon2.classList.replace('fa-solid', 'fa-regular');
  }
}

circleFour.addEventListener('click', clickToGoToFour);
function clickToGoToFour(event) {
  if (event.target && event.target.matches('.four')) {
    clearInterval(intervalId);
    intervalId = setInterval(goThruImages, 3000);
    imageCount = 4;
    image.setAttribute('src', 'images/007.png');
    icon4.classList.replace('fa-regular', 'fa-solid');
    icon5.classList.replace('fa-solid', 'fa-regular');
    icon1.classList.replace('fa-solid', 'fa-regular');
    icon3.classList.replace('fa-solid', 'fa-regular');
    icon2.classList.replace('fa-solid', 'fa-regular');
  }
}

circleFive.addEventListener('click', clickToGoToFive);
function clickToGoToFive(event) {
  if (event.target && event.target.matches('.five')) {
    clearInterval(intervalId);
    intervalId = setInterval(goThruImages, 3000);
    imageCount = 5;
    image.setAttribute('src', 'images/039.png');
    icon5.classList.replace('fa-regular', 'fa-solid');
    icon1.classList.replace('fa-solid', 'fa-regular');
    icon4.classList.replace('fa-solid', 'fa-regular');
    icon3.classList.replace('fa-solid', 'fa-regular');
    icon2.classList.replace('fa-solid', 'fa-regular');
  }
}
