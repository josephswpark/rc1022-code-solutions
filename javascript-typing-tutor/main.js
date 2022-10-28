var charNodes = document.querySelectorAll('span');
var currentIndex = 0;
document.addEventListener('keydown', typingTest);

function typingTest(event) {
  // if we are at the end of the test, alert and reload page
  if (currentIndex === charNodes.length) {
    alert('DONE! Restarting Test....');
    window.location.reload();
  }
  // if not backspace, validate character
  if (event.keyCode !== 8) {
    checkCharacterIsValid(event.key, currentIndex);
  }
  // we want to update index when going forward or back
  if (event.key === charNodes[currentIndex].innerHTML || event.keyCode === 8) {
    updateCurrentIndex(event.keyCode);
  }
  // if we are NOT at the end of the test, underline the next character
  if (currentIndex !== charNodes.length) {
    underlineNewCharacter(currentIndex);
  }
}
// function to increment/decrement current index
function updateCurrentIndex(keyCode) {
  resetUnderline(currentIndex);
  if (keyCode === 8 && currentIndex > 0) {
    currentIndex -= 1;
    resetCharacter(currentIndex);
  } else {
    currentIndex += 1;
  }
}
// function to check if keydown matches the current node
function checkCharacterIsValid(currentChar, charIndex) {
  var currentNode = charNodes[charIndex];
  if (currentChar === currentNode.innerHTML) {
    currentNode.className = 'correct';
  } else {
    currentNode.className = 'incorrect';
  }
}
// function takes in node index, resets classname to empty string
function resetCharacter(nodeIndex) {
  charNodes[nodeIndex].className = '';
}
// function takes in current index and adds class = current
function underlineNewCharacter(currentIndex) {
  if (!charNodes[currentIndex].classList.contains('current')) {
    charNodes[currentIndex].classList.add('current');
  }
}
// function takes current index and removes class=current
function resetUnderline(currentIndex) {
  charNodes[currentIndex].classList.remove('current');
}
