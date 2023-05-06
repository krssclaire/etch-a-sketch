const container = document.querySelector('.container');
const cell = document.querySelectorAll('.cell');

function createGrid(row, col) {
    container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;

    for (let i = 0; i < (row * col) -1 ; i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
    }
}

function name(params) {
  
}

createGrid(16, 16);