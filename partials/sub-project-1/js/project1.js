console.log("Working");

const moveElm = document.getElementById('cursor');
addEventListener('mousemove', (eventData) => {
    // console.log('Moving..!');
    // console.log(eventData);
    // console.log(eventData.screenX, eventData.screenY);
    // console.log(eventData.pageX, eventData.pageY);
    // moveElm.style.backgroundColor = 'yellow';
    moveElm.style.left = `${eventData.pageX}px`;
    moveElm.style.top = `${eventData.pageY}px`;
});

document.body.addEventListener('mouseleave', () => {
    // moveElm.style.visibility = 'hidden';
    moveElm.style.opacity = 0;
});

document.body.addEventListener('mouseenter', () => {
    moveElm.style.opacity = 1;
},500);

/* Bomb Timer */
/* let x = 0;
const tmrId1 = setInterval(() => {
    console.log("Blased...!");
},5000);

const btnStopTimer1 = document.querySelector('#btnStopTimer1');
btnStopTimer1.addEventListener('click', ()=> {
    clearTimeout(tmrId1);   
    console.log("Bomb stop")
}); */

const cursorElm = document.getElementById('cursor');
const tmrId3 = setInterval(() => {
    cursorElm.style.opacity = 0;
    console.log("hidden...!");
},3000);

addEventListener('mousemove', (eventData) => {
    cursorElm.style.opacity = 1;
    // clearInterval(tmrId3);
});