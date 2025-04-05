function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function drawRandomShape() {
    const shapeColors = ["red", "blue", "green", "yellow"];
    const randomIndex = getRandomInt(4);
    return `circle(${shapeColors[randomIndex]})`;
}
