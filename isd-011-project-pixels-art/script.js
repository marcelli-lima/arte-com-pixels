window.onload = function() {
  const color = document.getElementsByClassName("color")
  color[0].style.background = "black"
  color[1].style.background = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
  color[2].style.background = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
  color[3].style.background = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');

  function handleChangeSelected(event) {
    const select = document.getElementsByClassName("selected")[0]
    select.classList.remove("selected");
    event.target.classList.add('selected');
  }
  const colorPalette = document.getElementById("color-palette")
  colorPalette.addEventListener('click', handleChangeSelected);


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

const board = document.getElementById("generate-board")

function removeTable() {
  const lines = document.querySelectorAll('tr');
  const columns = document.querySelectorAll('td');
  for (let linIndex = 0; linIndex < lines.length; linIndex += 1) {
    lines[linIndex].remove();
    for (let colIndex = 0; colIndex < columns.length; colIndex += 1) {
      columns[colIndex].remove();
    }
  }
}

board.addEventListener("click", function() {
let input = document.getElementById("board-size")
if (input.value === "") {
  alert("Board inválido!")
}
if (input.value !== '') {
  removeTable();
let boardSize;
if (input.value < 5) {
  boardSize = 5;
} else if (input.value > 50) {
  boardSize = 50;
} else {
  boardSize = input.value;
}
for (let linIndex = 0; linIndex < boardSize; linIndex += 1) {
  let line = document.createElement('tr');
  pixel.appendChild(line);
  for (let colIndex = 0; colIndex < boardSize; colIndex += 1) {
    let column = document.createElement('td');
    column.className = 'pixel';
    line.appendChild(column);
  }
}
}
})
} 
