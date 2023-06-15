const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000';
const container = document.querySelector('.grid');
const colorPicker = document.querySelector('#color-picker');
const colorBtn = document.querySelector('#color-choice');
const rainbowBtn = document.querySelector('#rainbow');
const eraserBtn = document.querySelector('#eraser');
const resetBtn = document.querySelector('#reset');
const gridSizing = document.querySelector('.sizing p');
const sizingRange = document.querySelector('input[type="range"]');
const btn = document.querySelector('button');
let currentColor = DEFAULT_COLOR; 

resetBtn.addEventListener('click', clearGrid);
sizingRange.addEventListener('input', changeGrid);

function createSketchPad(size) {
    container.innerHTML = '';
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size ** 2); i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
        div.setAttribute('id', `cell-${i + 1}`);
    }
    
    let cells = document.querySelectorAll('.grid div');
    
    cells.forEach(cell => {
        cell.addEventListener("mouseover", (event) => {
        //document.getElementById(`${cellId}`).style.backgroundColor = 'black';   
        event.target.style.backgroundColor = currentColor;   
        })
    });
}


function updateGridSizing(size) {
    gridSizing.textContent = `${size} x ${size}`;
}

function clearGrid() {
    createSketchPad(DEFAULT_SIZE);
}

function changeGrid() {
    let size = sizingRange.value;
    container.innerHTML = '';
    createSketchPad(size);
    updateGridSizing(size);
}


window.onload = () => {
    container.innerHTML = '';
    createSketchPad(DEFAULT_SIZE);
}
