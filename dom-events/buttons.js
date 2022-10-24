function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var lo = document.querySelector('.click-button');
lo.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);

}

var hover = document.querySelector('.hover-button');
hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var doubled = document.querySelector('.double-click-button');
doubled.addEventListener('dblclick', handleDoubleClick);
