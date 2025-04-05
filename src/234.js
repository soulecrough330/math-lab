function createSquareTriangle(side) {
  let sideLength = Math.sqrt(2) * side;
  const triangleArea = side / 2 * (side + sideLength);
  return `The area of the square is ${Math.round(triangleArea)}; The area of the triangle is ${side / 2} (${sideLength})`;
}

function calculateFactorial(number) {
  let factorial = number;
  while (number > 1) {
    factorial *= number--;
  }
  return factorial;
}
