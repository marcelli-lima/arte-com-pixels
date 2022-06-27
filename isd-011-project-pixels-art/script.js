window.onload = function() {
  const color = document.getElementsByClassName("color")
  color[0].style.background = "black"
  color[1].style.background = "red"
  color[2].style.background = "blue"
  color[3].style.background = "purple"

  function handleChangeSelected(event) {
    const select = document.getElementsByClassName("selected")[0]
    select.classList.remove("selected");
    event.target.classList.add('selected');
  }
  const colorPalette = document.getElementById("color-palette")
  colorPalette.addEventListener('click', handleChangeSelected);
}

const pixel = document.querySelector("#pixel-board");
pixel.addEventListener('click', paintPixel);

function paintPixel (event) {
const selected = document.querySelector(".selected");
event.target.style.backgroundColor = selected.style.backgroundColor
}

const clear = document.querySelector("#clear-board")
clear.addEventListener("click", clearTable)

function clearTable() {
  const getPixels = document.querySelectorAll('.pixel');
  for (let pixel of getPixels) {
    pixel.style.backgroundColor = 'white';
  }
}

