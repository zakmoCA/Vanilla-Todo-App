const taskInput = document.getElementById('taskinput')
const addBtn = document.getElementById('add')
const taskContainer = document.getElementById('task')
const deleteBtn = document.getElementById('delete')
let taskDiv = document.getElementById('taskdiv')

function createTodo() {
  const task = taskInput.value // store user input value
  if (task !== '') { // create task if there is input
    // dynamically create the 'task' element
    const newTask = document.createElement("li")
    // we will want delete functionality so each task comes with delete button
    const deleteButton = document.createElement("button")
    const individualTaskDiv = document.createElement('div')
    // set unique id for each 'task'
    individualTaskDiv.setAttribute('id', `task-${Date.now()}`);
    individualTaskDiv.setAttribute('class', 'individual')
    deleteButton.setAttribute('id', 'delete')
    deleteButton.innerText = 'Delete'
    newTask.innerText = task
    taskContainer.appendChild(individualTaskDiv)
    individualTaskDiv.appendChild(newTask)
    individualTaskDiv.appendChild(deleteButton)
    taskInput.value = ''
  
  // Save the todo list to local storage
  localStorage.setItem('todoList', taskContainer.innerHTML);
  }
}

if (localStorage.getItem('todoList')) {
  taskContainer.innerHTML = localStorage.getItem('todoList');
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const todoList = localStorage.getItem('todoList');
  createTodo()
})

taskContainer.addEventListener('click', (e) => {
  // Check if the event target is the delete button
  if (e.target.id === 'delete') {
    // Get the parent div element and remove it from the DOM
    const taskDiv = e.target.parentElement;
    taskDiv.remove();
     // Save the updated todo list to local storage
    localStorage.setItem('todoList', taskContainer.innerHTML);
  
  }
});