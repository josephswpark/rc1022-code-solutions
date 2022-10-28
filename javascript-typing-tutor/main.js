var charNodes = document.querySelectorAll('span');
var currentIndex = 0;
document.addEventListener('keydown', typingTest);

function typingTest(event) {
  if (currentIndex === charNodes.length) {
    alert('DONE! Restarting Test....');
    window.location.reload();
  }
  if (event.keyCode !== 8) {
    checkCharacterIsValid(event.key, currentIndex);
  }
  if (event.key === charNodes[currentIndex].innerHTML || event.keyCode === 8) {
    updateCurrentIndex(event.keyCode);
  }
  if (currentIndex !== charNodes.length) {
    underlineNewCharacter(currentIndex);
  }
}
function updateCurrentIndex(keyCode) {
  resetUnderline(currentIndex);
  if (keyCode === 8 && currentIndex > 0) {
    currentIndex -= 1;
    resetCharacter(currentIndex);
  } else {
    currentIndex += 1;
  }
}
function checkCharacterIsValid(currentChar, charIndex) {
  var currentNode = charNodes[charIndex];
  if (currentChar === currentNode.innerHTML) {
    currentNode.className = 'correct';
  } else {
    currentNode.className = 'incorrect';
  }
}
function resetCharacter(nodeIndex) {
  charNodes[nodeIndex].className = '';
}

function underlineNewCharacter(currentIndex) {
  if (!charNodes[currentIndex].classList.contains('current')) {
    charNodes[currentIndex].classList.add('current');
  }
}

function resetUnderline(currentIndex) {
  charNodes[currentIndex].classList.remove('current');
}
