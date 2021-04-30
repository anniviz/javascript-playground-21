import getAllElements from './utils/getAllElements'

const boxes = getAllElements('[data-box]')

boxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('active')
  })
})
