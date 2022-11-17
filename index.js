//create a 16x16 grid of square divs
/*function createGrid(num) {
    const container = document.querySelector('.container');
    container.textContent = '';

    let gridSize = num*num
    let width = container.clientWidth/num;
    let height = container.clientHeight/num;
    for (let i = 0; i < gridSize; i++) {
        let cell = document.createElement('div');
        cell.style.width = `${width}px`;
        cell.style.height = `${height}px`;
        cell.className = 'grid-cell';
        container.appendChild(cell);
    }
}

createGrid(16);

//Set up a “hover” effect so that the cells change color when your mouse passes over them
let cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () =>
        cell.style.backgroundColor = 'black');
    })

//enable color change
let usrColor = document.getElementById('usr-color');

usrColor.addEventListener('input', () => {
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () =>
        cell.style.backgroundColor = usrColor.value);
    });
}) */
