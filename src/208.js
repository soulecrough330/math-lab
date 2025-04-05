// Function to perform basic arithmetic operations with integers
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) throw new Error('Division by zero is not allowed!');
  return x / y;
}

// Function to perform basic arithmetic operations with arrays
function addArray(a, b) {
  const sum = a.map(item => item + b);
  return sum;
}

function subtractArray(a, b) {
  const difference = a.map(item => item - b);
  return difference;
}

function multiplyArray(a, b) {
  const product = a.map(item => item * b);
  return product;
}

function divideArray(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed!');
  const result = a.map((item, index) => item / b[index]);
  return result;
}
