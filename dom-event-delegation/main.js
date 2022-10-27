var list = document.querySelector('.task-list');

function taskList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target && event.target.matches('button')) {
    var lists = event.target.closest('.task-list-item');
    console.log(lists);
    lists.remove('.task-list-list');
  }
}

list.addEventListener('click', taskList);
