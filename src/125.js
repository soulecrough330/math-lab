function calculateArea(rectangle) {
    const length = rectangle.length;
    const width = rectangle.width;
    return length * width;
}

function drawRectangle(width, height) {
    let context = canvas.getContext("2d");
    context.fillRect(0, 0, width, height);
}
