// getElementById
const btnDecrease = document.getElementById('decrease')
const btnReset = document.getElementById('reset')
const btnIncrease = document.getElementById('increase')
const elCounter = document.getElementById('counter')
const counterStyles = getComputedStyle(elCounter)

const initialCounter = parseInt(elCounter.dataset.initial) || 0 // defaults to 0

let counter = initialCounter

function increase() {
  // TODO: add max and min limits
  counter++
}

function decrease() {
  counter--
}

function reset() {
  counter = initialCounter
}

function changeCounterColor() {
  if (counter > 0) {
    elCounter.style.color = counterStyles.getPropertyValue('--positive')
  } else if (counter === 0) {
    elCounter.style.color = counterStyles.getPropertyValue('--neutral')
  } else {
    elCounter.style.color = counterStyles.getPropertyValue('--negative')
  }
}

function updateCounterEl() {
  elCounter.textContent = counter
}

// event listeners
btnDecrease.addEventListener('click', function () {
  decrease()
  changeCounterColor()
  updateCounterEl()
})

btnReset.addEventListener('click', function () {
  reset()
  changeCounterColor()
  updateCounterEl()
})

btnIncrease.addEventListener('click', function () {
  increase()
  changeCounterColor()
  updateCounterEl()
})
