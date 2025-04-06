function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateArea(rectangle, circle) {
  const area = rectangle.width * rectangle.height;
  if (circle.circleEqualsRectangularRectangluarRectangle()) {
    return area;
  } else {
    return false;
  }
}

// Example usage:
const rectangle = { width: 10, height: 5 };
const circle = { radius: 2 };

console.log(`The area of the rectangle is ${calculateArea(rectangle, circle)}`);
