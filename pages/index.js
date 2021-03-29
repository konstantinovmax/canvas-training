const canvasBody = document.querySelector('.canvas');
const clearButton = document.querySelector('.clear-button');
const canvas = canvasBody.getContext('2d');
const canvasWidth = canvasBody.width = window.innerWidth;
const canvasHeight = canvasBody.height = window.innerHeight;
let isMouseDown = false;

canvasBody.addEventListener('mousedown', function() {
    isMouseDown = true;
});

canvasBody.addEventListener('mouseup', function() {
    isMouseDown = false;
    canvas.beginPath();
});

canvas.lineWidth = 3 * 2;

canvasBody.addEventListener('mousemove', function(e) {
    if (isMouseDown) {
        canvas.lineTo(e.clientX, e.clientY);
        canvas.stroke();

        canvas.beginPath();
        canvas.arc(e.clientX, e.clientY, 3, 0, Math.PI * 2);
        canvas.fill();

        canvas.beginPath();
        canvas.moveTo(e.clientX, e.clientY);
    }
});

function clear() {
    canvas.fillStyle = 'white';
    canvas.fillRect(0, 0, canvasWidth, canvasHeight);

    canvas.beginPath();
    canvas.fillStyle = 'black';
}

clearButton.addEventListener('click', clear);
