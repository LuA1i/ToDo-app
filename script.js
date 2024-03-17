const addButton = document.querySelector('#add_item')
const emptyList = document.querySelector('#list_adder')
const inputField = document.querySelector('#input_task')

addButton.addEventListener('click', function () {
  const inputFieldValue = inputField.value.trim()

  if (inputFieldValue !== '') {
    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '5px'

    const addlist = document.createElement('li')
    addlist.appendChild(checkBox)
    addlist.appendChild(document.createTextNode(inputFieldValue))

    checkBox.addEventListener('click', checkboxCross)

    emptyList.appendChild(addlist)
    inputField.value = ''
  } else {
    alert('Enter a task name.')
  }
})
