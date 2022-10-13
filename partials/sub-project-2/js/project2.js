const boxElm = document.querySelector('#box');

let x = 0;
const startY = (innerHeight-boxElm.offsetHeight) / 2;

srtInterval(() => {
    const y = startY + Math.sin(x++ / 180) * 50;
    boxElm.style.top = `${y}px`;
}, 5);