const addButton = document.querySelector('#add_item')
const emptyList = document.querySelector('#list_adder')
const inputField = document.querySelector('#input_task')
function checkboxCross(e) {
  const checkbox = e.target

  const listItem = checkbox.parentNode

  listItem.classList.toggle('completed', checkbox.checked)
}
addButton.addEventListener('click', function () {
  const inputFieldValue = inputField.value.trim()

  if (inputFieldValue !== '') {
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement('button')

    deleteButton.innerHTML = 'Delete Task'

    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'
    deleteButton.style.marginLeft = '65%'

    const addlist = document.createElement('li')
    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(inputFieldValue))
    addlist.appendChild(deleteButton)

    checkBox.addEventListener('click', checkboxCross)

    emptyList.appendChild(addlist)
    inputField.value = ''
  } else {
    alert('Enter a task name.')
  }
})
