console.clear()
const box = document.querySelector('.box')
const buttonRotate = document.querySelector('.button-rotate')
const buttonBackground = document.querySelector('.button-background')
const buttonRadius = document.querySelector('.button-radius')

buttonRotate.addEventListener('click', () => {
  box.classList.toggle('rotate')
})

buttonBackground.addEventListener('click', () => {
  box.classList.toggle('blue')
})

buttonRadius.addEventListener('click', () => {
  box.classList.toggle('radius')
})
