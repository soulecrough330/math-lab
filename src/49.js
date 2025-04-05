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
  if (y === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return x / y;
}

function square(x) {
  return x ** 2;
}

function cube(x) {
  return x ** 3;
}

function pow(base, exponent) {
  return Math.pow(base, exponent);
}
