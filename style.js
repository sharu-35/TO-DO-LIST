const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add');
const tasksList = document.getElementById('tasks');

addBtn.addEventListener('click', addTask);

function addTask() {
  const task = taskInput.value;
  const taskListItem = document.createElement('li');
  taskListItem.textContent = task;
  tasksList.appendChild(taskListItem);
  taskInput.value = '';
}
