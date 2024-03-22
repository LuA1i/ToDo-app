const addButton = document.querySelector('#add_item')
const emptyList = document.querySelector('#list_adder')
const inputField = document.querySelector('#input_task')
const activeTaskbtn = document.querySelector('#see_active_tasks')
const completedTaskbtn = document.querySelector('#see_completed_tasks')
const allTaskbtn = document.querySelector('#see_all_tasks')
const searchButton = document.querySelector('#search_item')

// --------------------------------------------------------------Saving Tasks Locally------------------------------------------//
const todos = JSON.parse(localStorage.getItem('todos')) || []

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function checkboxCross(e) {
  const checkbox = e.target
  const listItem = checkbox.parentNode
  const todoIndex = listItem.getAttribute('data-index')
  todos[todoIndex].completed = checkbox.checked
  listItem.classList.toggle('completed', checkbox.checked)
  saveTodos()
}

function loadTodos() {
  todos.forEach((checkList, index) => {
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement('button')

    deleteButton.innerHTML = 'Trash Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'
    deleteButton.style.marginLeft = '65%'

    const addlist = document.createElement('li')
    addlist.setAttribute('data-index', index)
    addlist.classList.add('list-item')

    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(checkList.name))
    addlist.appendChild(deleteButton)

    checkBox.checked = checkList.completed
    addlist.classList.toggle('completed', checkList.completed)

    checkBox.addEventListener('click', checkboxCross)

    emptyList.appendChild(addlist)
  })
} // --------------------------------------------------------------Showing Active Task--------------------------------------------//

activeTaskbtn.addEventListener('click', showActiveTask)

function showActiveTask() {
  emptyList.innerHTML = ''

  const activeTasks = todos.filter((todo) => !todo.completed)
  activeTasks.forEach((checkList, index) => {
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement('button')

    deleteButton.innerHTML = 'Trash Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'
    deleteButton.style.marginLeft = '65%'

    const addlist = document.createElement('li')
    addlist.setAttribute('data-index', index)
    addlist.classList.add('list-item')

    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(checkList.name))
    addlist.appendChild(deleteButton)

    checkBox.checked = checkList.completed
    addlist.classList.toggle('completed', checkList.completed)

    checkBox.addEventListener('click', checkboxCross)

    emptyList.appendChild(addlist)
  })
}
// --------------------------------------------------------------Showing Completed Task------------------------------------------//
completedTaskbtn.addEventListener('click', showCompletedTask)

function showCompletedTask() {
  emptyList.innerHTML = ''
  const completedTask = todos.filter((todo) => todo.completed)

  completedTask.forEach((checkList, index) => {
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement('button')

    deleteButton.innerHTML = 'Trash Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'
    deleteButton.style.marginLeft = '65%'

    const addlist = document.createElement('li')
    addlist.setAttribute('data-index', index)
    addlist.classList.add('list-item')

    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(checkList.name))
    addlist.appendChild(deleteButton)

    checkBox.checked = checkList.completed
    addlist.classList.toggle('completed', checkList.completed)

    checkBox.addEventListener('click', checkboxCross)

    emptyList.appendChild(addlist)
  })
}

loadTodos()
// --------------------------------------------------------------Showing Completed Task------------------------------------------//

allTaskbtn.addEventListener('click', showAllTasks)

function showAllTasks() {
  emptyList.innerHTML = ''

  todos.forEach((checkList, index) => {
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement('button')

    deleteButton.innerHTML = 'Trash Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'
    deleteButton.style.marginLeft = '65%'

    const addlist = document.createElement('li')
    addlist.setAttribute('data-index', index)
    addlist.classList.add('list-item')

    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(checkList.name))
    addlist.appendChild(deleteButton)

    checkBox.checked = checkList.completed
    addlist.classList.toggle('completed', checkList.completed)

    checkBox.addEventListener('click', checkboxCross)

    emptyList.appendChild(addlist)
  })
}
// --------------------------------------------------------------Search for Tasks------------------------------------------//

searchButton.addEventListener('click', searchTask)

function searchTask() {
  const searchTerm = document
    .querySelector('.input_2 input')
    .value.trim()
    .toLowerCase()

  const filteredTasks = todos.filter((todo) =>
    todo.name.toLowerCase().includes(searchTerm)
  )

  emptyList.innerHTML = ''

  filteredTasks.forEach((checkList, index) => {
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement('button')

    deleteButton.innerHTML = 'Trash Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'
    deleteButton.style.marginLeft = '65%'

    const addlist = document.createElement('li')
    addlist.setAttribute('data-index', index)
    addlist.classList.add('list-item')

    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(checkList.name))
    addlist.appendChild(deleteButton)

    checkBox.checked = checkList.completed
    addlist.classList.toggle('completed', checkList.completed)

    checkBox.addEventListener('click', checkboxCross)

    emptyList.appendChild(addlist)
  })
}

// --------------------------------------------------------------Add Tasks Button------------------------------------------//
addButton.addEventListener('click', function () {
  const inputFieldValue = inputField.value.trim()

  if (inputFieldValue !== '') {
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement('button')

    deleteButton.innerHTML = 'Trash Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px' // going add this to css remove here
    deleteButton.style.marginLeft = '65%' // going add this to css remove here'

    const addlist = document.createElement('li')
    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(inputFieldValue))
    addlist.appendChild(deleteButton)

    checkBox.addEventListener('click', checkboxCross)

    emptyList.appendChild(addlist)
    inputField.value = ''
    todos.push({ name: inputFieldValue, completed: false })
    saveTodos()
  } else {
    alert('Enter a task name.')
  }
})
