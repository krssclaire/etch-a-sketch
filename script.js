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
let currentColor = DEFAULT_COLOR; 
let rainbow = false;

resetBtn.addEventListener('click', clearGrid);
sizingRange.addEventListener('input', changeGrid);
colorPicker.addEventListener('input', () => {
    rainbow = false;
    currentColor = colorPicker.value
});
colorBtn.addEventListener('click', () => {
    rainbow = false;
    currentColor = colorPicker.value
});
rainbowBtn.addEventListener('click', () => {
    rainbow = true;
});
eraserBtn.addEventListener('click', () => {
    rainbow = false;
    currentColor = 'white'
});



function createSketchPad(size) {
    container.innerHTML = '';
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size ** 2); i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
    }
    
    // Color cells while hovering
    let cells = document.querySelectorAll('.grid div');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            if (rainbow) {
                let red = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);
                currentColor = `rgb(${red}, ${green}, ${blue})`;   
            }
            e.target.style.backgroundColor = currentColor;   
        })
    });
}

function updateGridSizing(size) {
    gridSizing.textContent = `${size} x ${size}`;
}

function clearGrid() {
    updateGridSizing(DEFAULT_SIZE)
    createSketchPad(DEFAULT_SIZE);
}

function changeGrid() {
    let size = sizingRange.value;
    container.innerHTML = '';
    updateGridSizing(size);
    createSketchPad(size);
}

window.onload = () => {
    container.innerHTML = '';
    createSketchPad(DEFAULT_SIZE);
}
