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
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

function power(x, n) {
  if (n < 0) x = 1 / x; // Convert negative exponent to positive
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
