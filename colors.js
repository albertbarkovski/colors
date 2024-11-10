const button = document.querySelector('button');
const body = document.querySelector('body');
const currentColor = document.querySelector('.current-color');

// const colors = [
//     'red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'brown', 'black', 'white'
// ];

// let colorBefore = '';

// button.addEventListener('click', () => {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     const randomColor = colors[randomIndex];

//     if (randomColor === colorBefore) {
//         return button.click();
//     }

//     colorBefore = randomColor;

//     body.style.backgroundColor = randomColor;
//     currentColor.textContent = randomColor;
// }); 

button.addEventListener('click', () => {
    
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);

const randomColor = `rgb(${r}, ${g}, ${b})`;

body.style.backgroundColor = randomColor;
currentColor.textContent = randomColor;


});