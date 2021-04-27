console.clear()
const box = document.querySelector('.box')
const buttonRotate = document.querySelector('.button-rotate')

buttonRotate.addEventListener('click', () => {
  console.log('test')
  box.classList.toggle('rotate')
})
