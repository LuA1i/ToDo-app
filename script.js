const addButton = document.querySelector('#add_item')
const emptyList = document.querySelector('#list_adder')
const inputField = document.querySelector('#input_task')

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

    deleteButton.innerHTML = 'Delete Task'

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

addButton.addEventListener('click', function () {
  const inputFieldValue = inputField.value.trim()

  if (inputFieldValue !== '') {
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement('button')

    deleteButton.innerHTML = 'Delete Task'

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
