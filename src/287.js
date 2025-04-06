function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Divide by zero');
  }
  return a / b;
}

function power(x, n) {
  if (!Number.isInteger(n)) {
    throw new Error('Exponent must be an integer.');
  }
  return Math.pow(x, n);
}
