const container = document.querySelector('.container');
const btn = document.querySelector('button');

function createSketchPad(size) {
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size ** 2); i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
        div.setAttribute('id', `cell-${i + 1}`)
    }
    
    // Color cells on mouseover
    let cells = document.querySelectorAll('div');

    cells.forEach(cell => {
        cell.addEventListener("mouseover", (event) => {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        //document.getElementById(`${cellId}`).style.backgroundColor = 'black';   
        event.target.style.backgroundColor = `rgb(${red - 25.5}, ${green -25.5}, ${blue -25.5})`;   
        })
    });
}
createSketchPad(16);

// Change grid size
btn.addEventListener('click', changeGrid);

function changeGrid() {
    let size = parseInt(prompt('Insert the size of the grid', ''));

    if (size > 0 && size <= 100) {
        container.innerHTML = '';
        createSketchPad(size);
    } else {
        alert('Not valid. Retry!');
    } 
}