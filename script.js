const container = document.querySelector('.container');

function createGrid(row, col) {
    container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;

    for (let i = 0; i < (row * col); i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
        div.setAttribute('id', `cell-${i + 1}`)
    }
}

createGrid(16, 16);

const cell = document.querySelectorAll('.cell');


const cellHovered = e => {
    cellId = e.target.id;
    changeCellColor();
}

for (let gridItem of cell) {
    gridItem.addEventListener('mouseover', cellHovered);
}


function changeCellColor() {
    console.log(cellId);
    document.getElementById(`${cellId}`).classList.add('colored');
}