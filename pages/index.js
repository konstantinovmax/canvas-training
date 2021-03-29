const canvasBody = document.querySelector('.canvas');
const canvas = canvasBody.getContext('2d');
const canvasWidth = canvasBody.width = window.innerWidth;
const canvasHeight = canvasBody.height = window.innerHeight;

canvas.fillStyle = '#000';
canvas.arc(canvasWidth / 2, canvasHeight / 2, 50, 0, Math.PI * 2);
canvas.fill();


