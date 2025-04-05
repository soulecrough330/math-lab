function drawCircle(x, y, radius) {
    const ctx = document.createElement('canvas');
    ctx.width = 2 * radius;
    ctx.height = 2 * radius;
    ctx.backgroundColor = 'white';
    let angle = Math.PI / 4; // π/4 radians for a circle

    function arc(startAngle, endAngle, radius) {
        ctx.arc(x + (radius / 2), y + (radius / 2), radius, startAngle, endAngle);
        ctx.stroke();
    }

    drawLine(x, y, x + (radius * 0.5), y + (radius * 0.5));
}

function drawLine(x1, y1, x2, y2) {
    const ctx = document.createElement('canvas');
    ctx.width = 2;
    ctx.height = 2;

    // Draw line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Draw circle
    drawCircle(x1, y1, radius);

    // Add lines between the points
    for (let i = x1; i < x2; i += 1) {
        drawLine(i, Math.floor((i - x1 + 0.5) / (radius * 2)), x2, y2);
    }
}

drawCircle(0, 0, 5);

function getRandomPoint() {
    return [Math.random(), Math.random()];
}
