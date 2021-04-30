const form1 = document.querySelector('[data-form1]')
const form2 = document.querySelector('[data-form2]')
const input1 = document.querySelector('[name="class-text1"]')
const input2 = document.querySelector('[name="class-text2"]')
const input3 = document.querySelector('[name="class-text3"]')
const input4 = document.querySelector('[name="class-text4"]')

form1.addEventListener('submit', event => {
  event.preventDefault()
  switchText(input1, input2)
})

form2.addEventListener('submit', event => {
  event.preventDefault()
  switchText(input3, input4)
})

function switchText(firstInput, secondInput) {
  const text1 = firstInput.value
  const text2 = secondInput.value
  firstInput.value = text2
  secondInput.value = text1
}
