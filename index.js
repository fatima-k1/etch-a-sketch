const container = document.querySelector('.container');
const usrColor = document.getElementById('usr-color');
const colorBtn = document.getElementById('color-btn');
const random = document.getElementById('random');
const eraser = document.getElementById('eraser');
const size = document.getElementById('size');
const sizeValue = document.getElementById('value');
const clear = document.getElementById('clear');

let color = '#000000';
let grid = 16;
let cell = document.querySelector('.grid-cell');

//create a grid and enable color change
function createGrid(num) {
    container.innerHTML = '';

    let gridSize = num*num
    let width = container.clientWidth/num;
    let height = container.clientHeight/num;
    for (let i = 0; i < gridSize; i++) {
        let cell = document.createElement('div');
        cell.style.width = `${width}px`;
        cell.style.height = `${height}px`;
        cell.className = 'grid-cell';
        container.appendChild(cell);

        cell.addEventListener('mousedown', changeColor);
        cell.addEventListener('mouseover', changeColor)
    }
}

window.onload = () => {
    createGrid(grid);
    colorBtn.style.backgroundColor = usrColor.value;
    colorBtn.style.color = 'white';
}

let mousedown = false;
container.onmousedown = () => (mousedown = true);
container.onmouseup = () => (mousedown = false);

usrColor.addEventListener('input', () => {
    setCurrentColor(usrColor.value);
    activateBtn('usrColor');
})
colorBtn.addEventListener('click', () => {
    setCurrentColor(usrColor.value);
    activateBtn('usrColor');
})
random.addEventListener('click', () => {
    setCurrentColor('random');
    activateBtn('random');
})
eraser.addEventListener('click', () => {
    setCurrentColor('eraser');
    activateBtn('eraser');
})

function setCurrentColor(newColor) {
    color = newColor;
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mousedown) return
    if (color === usrColor.value) {
        this.style.backgroundColor = usrColor.value;
    } else if (color === 'random') {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
    } else if (color === 'eraser') {
        this.style.backgroundColor = 'white';
    }
}

//enable size change and clear
size.addEventListener('input', changeSize);
clear.addEventListener('click', () => createGrid(size.value));

function changeSize() {
    createGrid(size.value);
    sizeValue.innerHTML = `${size.value}x${size.value}`;
}

//style buttons
function activateBtn(btn) {
    if (btn === 'usrColor') {
        colorBtn.style.backgroundColor = usrColor.value;
        colorBtn.style.color = 'white';
        random.classList.remove('active');
        eraser.classList.remove('active');
    } else if (btn === 'random') {
        random.classList.add('active');
        eraser.classList.remove('active');
        colorBtn.style.backgroundColor = '#F1ABB9';
        colorBtn.style.color = '#fceef1'
    } else if (btn === 'eraser') {
        eraser.classList.add('active');
        random.classList.remove('active');
        colorBtn.style.backgroundColor = '#F1ABB9';
        colorBtn.style.color = '#fceef1'
    }
}
