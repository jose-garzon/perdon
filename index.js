const body = document.querySelector('body')
const siContainer = document.querySelector('.si-container')
const noContainer = document.querySelector('.no-container')
const mainContainer = document.querySelector('.main-container')

const siBoton = document.querySelector('#si')
siBoton.addEventListener('click', () => {
  mainContainer.style.background = `url('img/background.gif')`
  siContainer.classList.remove('display-none')
  if (!noContainer.classList.contains('display-none')) {
    noContainer.classList.add('display-none')
  }
})
const noBoton = document.querySelector('#no')
noBoton.addEventListener('click', () => {
  noContainer.classList.remove('display-none')
  if (!siContainer.classList.contains('display-none')) {
    siContainer.classList.add('display-none')
    mainContainer.removeAttribute('style')
  }
})