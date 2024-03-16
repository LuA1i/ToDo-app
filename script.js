const addButton = document.querySelector('#add_item')
const emptyList = document.querySelector('#list_adder')
const inputField = document.querySelector('#input_task')

addButton.addEventListener('click', function () {
  const inputfeildEmpty = inputField.value.trim()

  if (inputfeildEmpty !== '') {
    const addlist = document.createElement('li')
    addlist.innerText = inputField.value
    emptyList.appendChild(addlist)
    inputField.value = ''
  } else {
    alert('Enter a task name.')
  }
})
