//create a 16x16 grid of square divs
const container = document.querySelector('.container');
container.textContent = '';

for (let i = 0; i < 16*16; i++) {
let cell = document.createElement('div');
cell.className = 'grid-cell';
container.appendChild(cell);
}
