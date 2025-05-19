function calculateArea(circleRadius) {
  const PI = Math.PI;
  return PI * circleRadius * circleRadius;
}

function displaySquare(sideLength) {
  console.log(`Side length of square is: ${sideLength.toFixed(2)} units`);
}

function calculatePerimeter(rectangleDimensions) {
  const sideLength = rectangleDimensions[0];
  const height = rectangleDimensions[1];
  return `Perimeter of the rectangle is: ${2 * (sideLength + height)} units`;
}
