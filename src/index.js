console.clear()
const box = document.querySelector('.box')
const buttonRotate = document.querySelector('.button-rotate')
const buttonBackground = document.querySelector('.button-background')

buttonRotate.addEventListener('click', () => {
  box.classList.toggle('rotate')
})

buttonBackground.addEventListener('click', () => {
  box.classList.toggle('blue')
})
