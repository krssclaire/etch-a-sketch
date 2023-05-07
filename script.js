const container = document.querySelector('.container');
const btn = document.querySelector('button');


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

// Change grid size
btn.addEventListener('click', changeGrid);

function changeGrid() {
    let size = parseInt(prompt('Insert the size of the grid', ''));

    if (size > 0 && size <= 100) {
        container.innerHTML = '';
        createGrid(size);
    } else {
        alert('Not valid. Retry!');
    } 
}

// Hover effect for coloring each cell hovered
let cells = document.querySelectorAll('div');

cells.forEach(cell => {
    cell.addEventListener("mouseover", (event) => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
        //document.getElementById(`${cellId}`).style.backgroundColor = 'black';   
    event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;   
    })
});