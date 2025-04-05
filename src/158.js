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
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function sqrt(x) {
  if (x < 0) {
    throw new Error("Square root of negative numbers is not defined");
  }
  return Math.sqrt(x);
}
