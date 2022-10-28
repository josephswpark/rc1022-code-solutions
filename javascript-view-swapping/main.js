/* eslint-disable no-redeclare */
var tabContainer = document.querySelector('.tab-container');
var tabNodes = document.querySelectorAll('.tab');
var viewNodes = document.querySelectorAll('.view');

tabContainer.addEventListener('click', clickOnTabContainer);

function clickOnTabContainer(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabNodes.length; i++) {
      if (tabNodes[i] === event.target) {
        tabNodes[i].classList.add('active');
      } else if (tabNodes[i].classList.contains('active')) {
        tabNodes[i].classList.remove('active');
      }
    }
    var dataViewAttr = event.target.getAttribute('data-view');
    for (i = 0; i < viewNodes.length; i++) {
      if (viewNodes[i].getAttribute('data-view') !== dataViewAttr) {
        viewNodes[i].classList.add('hidden');
      } else {
        viewNodes[i].classList.remove('hidden');
      }
    }
  }
}
