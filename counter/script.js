// getElementById
const btnDecrease = document.getElementById('decrease')
const btnReset = document.getElementById('reset')
const btnIncrease = document.getElementById('increase')
const elCounter = document.getElementById('counter')
const counterStyles = getComputedStyle(elCounter)

const initial = parseInt(elCounter.dataset.initial) || 0 // defaults to 0
const max = parseInt(elCounter.dataset.max) || Number.POSITIVE_INFINITY
const min = parseInt(elCounter.dataset.min) || Number.NEGATIVE_INFINITY
const step = parseInt(elCounter.dataset.step) || 1 // defaults to 1

// validate values
if (max <= min) {
  console.error("max must be greater than min")
}

if (initial < min || initial > max) {
  console.error('initial must be within the range of min to max inclusive')
}

let counter = initial
updateCounterEl()
changeCounterColor()

function increase() {
  if (counter >= max) return
  counter += step
}

function decrease() {
  if (counter <= min) return
  counter -= step
}

function reset() {
  counter = initial
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
