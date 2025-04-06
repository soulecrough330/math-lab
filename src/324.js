function calculatePerimeter(radius) {
  const perimeter = 2 * Math.PI * radius;
  return perimeter.toFixed(2);
}

console.log(calculatePerimeter(5));
