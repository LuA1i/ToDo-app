const addButton = document.querySelector('#add_item')
const emptyList = document.querySelector('#list_adder')
const inputField = document.querySelector('#input_task')
const activeTaskbtn = document.querySelector('#see_active_tasks')
const completedTaskbtn = document.querySelector('#see_completed_tasks')
const allTaskbtn = document.querySelector('#see_all_tasks')
const searchButton = document.querySelector('#search_item')
const trashedTaskbtn = document.querySelector('#see_trashed_tasks')

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

function deleteTask(index) {
  todos.splice(index, 1)
  saveTodos()
}

function loadTodos() {
  todos.forEach((checkList, index) => {
    const checkBox = document.createElement('input')
    const trashButton = document.createElement('button')

    trashButton.innerHTML = 'Trash Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'
    trashButton.style.marginLeft = '65%'

    const addlist = document.createElement('li')
    addlist.setAttribute('data-index', index)
    addlist.classList.add('list-item')

    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(checkList.name))
    addlist.appendChild(trashButton)

    checkBox.checked = checkList.completed
    addlist.classList.toggle('completed', checkList.completed)

    checkBox.addEventListener('click', checkboxCross)
    trashButton.addEventListener('click', function () {
      const listItem = this.parentNode
      const todoIndex = listItem.getAttribute('data-index')
      listItem.remove()
      deleteTask()
    })

    emptyList.appendChild(addlist)
  })
}

// --------------------------------------------------------------Showing Active Task--------------------------------------------//

activeTaskbtn.addEventListener('click', showActiveTask)

function showActiveTask() {
  emptyList.innerHTML = ''

  const activeTasks = todos.filter((todo) => !todo.completed && !todo.trashed)
  activeTasks.forEach((checkList, index) => {
    const checkBox = document.createElement('input')
    const trashButton = document.createElement('button')

    trashButton.innerHTML = 'Trash Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'
    trashButton.style.marginLeft = '65%'

    const addlist = document.createElement('li')
    addlist.setAttribute('data-index', index)
    addlist.classList.add('list-item')

    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(checkList.name))
    addlist.appendChild(trashButton)

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
    const trashButton = document.createElement('button')

    trashButton.innerHTML = 'Trash Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'
    trashButton.style.marginLeft = '65%'

    const addlist = document.createElement('li')
    addlist.setAttribute('data-index', index)
    addlist.classList.add('list-item')

    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(checkList.name))
    addlist.appendChild(trashButton)

    checkBox.checked = checkList.completed
    addlist.classList.toggle('completed', checkList.completed)

    checkBox.addEventListener('click', checkboxCross)

    emptyList.appendChild(addlist)
  })
}

// --------------------------------------------------------------Showing Trashed Task------------------------------------------//

trashedTaskbtn.addEventListener('click', showTrashedTasks)

function showTrashedTasks() {
  emptyList.innerHTML = ''

  const trashedTasks = todos.filter((todo) => todo.trashed)

  trashedTasks.forEach((checkList, index) => {
    const checkBox = document.createElement('input')
    const restoreButton = document.createElement('button')

    restoreButton.innerHTML = 'Restore Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'
    restoreButton.style.marginLeft = '65%'

    const addlist = document.createElement('li')
    addlist.setAttribute('data-index', index)
    addlist.classList.add('list-item')

    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(checkList.name))
    addlist.appendChild(restoreButton)

    checkBox.checked = checkList.completed
    addlist.classList.toggle('completed', checkList.completed)

    checkBox.addEventListener('click', checkboxCross)

    restoreButton.addEventListener('click', function () {
      todos[index].trashed = false
      showTrashedTasks()
      saveTodos()
    })

    emptyList.appendChild(addlist)
  })
}

// --------------------------------------------------------------Showing Completed Task------------------------------------------//

allTaskbtn.addEventListener('click', showAllTasks)

function showAllTasks() {
  emptyList.innerHTML = ''

  const allTask = todos.filter((todo) => !todo.trashed)
  allTask.forEach((checkList, index) => {
    const checkBox = document.createElement('input')
    const trashButton = document.createElement('button')

    trashButton.innerHTML = 'Trash Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'
    trashButton.style.marginLeft = '65%'

    const addlist = document.createElement('li')
    addlist.setAttribute('data-index', index)
    addlist.classList.add('list-item')

    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(checkList.name))
    addlist.appendChild(trashButton)

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
    const trashButton = document.createElement('button')

    trashButton.innerHTML = 'Trash Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'
    trashButton.style.marginLeft = '65%'

    const addlist = document.createElement('li')
    addlist.setAttribute('data-index', index)
    addlist.classList.add('list-item')

    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(checkList.name))
    addlist.appendChild(trashButton)

    checkBox.checked = checkList.completed
    addlist.classList.toggle('completed', checkList.completed)

    checkBox.addEventListener('click', checkboxCross)

    emptyList.appendChild(addlist)
  })
}
loadTodos()
// --------------------------------------------------------------Add Tasks Button------------------------------------------//
addButton.addEventListener('click', function () {
  const inputFieldValue = inputField.value.trim()

  if (inputFieldValue !== '') {
    const checkBox = document.createElement('input')
    const trashButton = document.createElement('button')

    trashButton.innerHTML = 'Trash Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px' // going add this to css remove here
    trashButton.style.marginLeft = '65%' // going add this to css remove here'

    const addlist = document.createElement('li')
    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(inputFieldValue))
    addlist.appendChild(trashButton)

    checkBox.addEventListener('click', checkboxCross)

    emptyList.appendChild(addlist)
    inputField.value = ''
    todos.push({ name: inputFieldValue, completed: false })
    saveTodos()
  } else {
    alert('Enter a task name.')
  }
})
