const elBgColor = document.getElementById('bg-color')
const elColorValue = document.getElementById('color-value')
const btnClickMe = document.getElementById('click-me')
const root = document.querySelector(':root')

let colorModelFunc = hsl

function rgb() {
  const [red, green, blue] = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ]
  return `rgb(${red}, ${green}, ${blue})`
}

function hsl() {
  const [hue, saturation, lightness] = [
    Math.floor(Math.random() * 360),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
  ]

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

function getRandomColor(colorModelFunc) {
  return colorModelFunc()
}

btnClickMe.addEventListener('click', () => {
  const colorValue = getRandomColor(colorModelFunc) // array destructuring
  // set the color
  root.style.setProperty('--bg-color', colorValue)
  elColorValue.textContent = colorValue
})
 