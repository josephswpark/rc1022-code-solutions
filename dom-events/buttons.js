function handleClick(event) {
  console.log(event);
  console.log(event.target);
}
console.log('button clicked');

var lo = document.querySelector('.click-button');
lo.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log(event);
  console.log(event.target);
}
console.log('button hovered');

var hover = document.querySelector('.hover-button');
hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log(event);
  console.log(event.target);
}
console.log('button double-clicked');

var doubled = document.querySelector('.double-click-button');
doubled.addEventListener('dblclick', handleDoubleClick);
