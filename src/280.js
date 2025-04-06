function drawTriangle(sideLength) {
  let triangle = [];
  for (let i = 0; i < sideLength; i++) {
    triangle.push(i);
  }
  console.log(triangle);
}

drawTriangle(5);

// or if you want to draw a square:
function drawSquare(sideLength) {
  let square = [];
  for (let i = 0; i < sideLength * sideLength / 2; i++) {
    square.push(i);
  }
  console.log(square);
}

drawSquare(3);
