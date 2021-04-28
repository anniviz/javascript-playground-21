const form = document.querySelector('[data-form]')
const input1 = document.querySelector('[name="class-text1"]')
const input2 = document.querySelector('[name="class-text2"]')

form.addEventListener('submit', event => {
  event.preventDefault()
  const input1Text = input1.value
  const input2Text = input2.value

  console.log(input2Text)
  input1.value = input2Text.toUpperCase()
  input2.value = input1Text.toLowerCase()
})
