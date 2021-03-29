const canvasBody = document.querySelector('.canvas');
const canvas = canvasBody.getContext('2d');
const width = canvasBody.width = window.innerWidth;
const height = canvasBody.height = window.innerHeight;

canvas.fillStyle = 'magenta';
canvas.arc(canvasBody.width / 2, canvasBody.height / 2, 100, 0, Math.PI * 2);
canvas.fill();


