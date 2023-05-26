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
  }
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault()
  createTodo()
})