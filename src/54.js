function calculateArea(rectangularShape) {
  let width = rectangularShape.width;
  let height = rectangularShape.height;

  if (width > height) {
    const tempWidth = width;
    width = height;
    height = tempWidth;
  }

  return area = width * height;
}

function areaTriangle() {
  // Calculate the area of a triangle
  const side1 = parseFloat(document.getElementById('side-1').value);
  const side2 = parseFloat(document.getElementById('side-2').value);
  const side3 = parseFloat(document.getElementById('side-3').value);

  let base = side1;
  let height = side2 - side1;

  if (base > Math.sqrt(side1 * (side1 + side2)) / side2) {
    // The triangle is obtuse
    area = ((base * side3) * (height - base * side3)) / (base * (base + side3));
  } else {
    // The triangle is acute or right
    area = (Math.sqrt(side1 * (side1 + side2)) / side1 - Math.sqrt(side2 * (side2 + side3)) / side2) * height;
  }

  document.getElementById('area-triangle').innerText = "Area: " + area.toFixed(2);
}

function calculateGCD(x, y) {
  // Calculate the greatest common divisor
  if (x > y) {
    return calculateGCD(y, x % y);
  } else {
    return x % y;
  }
}
