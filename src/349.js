// Initialize global variables here if needed
let x = 0;
let y = 5;

function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();

    // Draw some more circles with different colors and sizes
}

drawCircle(); // Call the function to draw the circle

// Code for drawing other shapes here
