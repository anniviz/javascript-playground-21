const box = document.querySelector('[data-box]')
const rotate = document.querySelector('[name="rotate-range"]')
const size = document.querySelector('[name="size-range"]')
const radius = document.querySelector('[name="radius-range"]')
const color = document.querySelector('[name="color-range"]')

box.style.transform = 'rotate(' + rotate.value + 'deg)'
box.style.height = size.value + 'px'
box.style.width = size.value + 'px'
box.style.borderRadius = radius.value + '%'
box.style.background = 'hsl(' + color.value + 'deg, 100%, 50%)'

rotate.addEventListener('input', () => {
  box.style.transform = 'rotate(' + rotate.value + 'deg)'
})

size.addEventListener('input', () => {
  box.style.height = size.value + 'px'
  box.style.width = size.value + 'px'
})

radius.addEventListener('input', () => {
  box.style.borderRadius = radius.value + '%'
})

color.addEventListener('input', () => {
  box.style.background = 'hsl(' + color.value + 'deg, 100%, 50%)'
})
