const container = document.querySelector('.container');
const btn = document.querySelector('button');

btn.addEventListener('click', changeGrid);


function createGrid(num) {
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    for (let i = 0; i < (num ** 2); i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
        div.setAttribute('id', `cell-${i + 1}`)
    }
}

createGrid(16);


const cell = document.querySelectorAll('.cell');

const cellHovered = e => {
    cellId = e.target.id;
    changeCellColor();
}

for (let gridItem of cell) {
    gridItem.addEventListener('mouseover', cellHovered);
}

function changeCellColor() {
    document.getElementById(`${cellId}`).style.backgroundColor = 'black';   
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
}

function changeGrid() {
    let size = parseInt(prompt('Insert the size of the grid', ''));

    if (size > 0 && size <= 100) {
        resetGrid();
        createGrid(size);
    } else {
        alert('Not valid. Retry!')
    }
        
}