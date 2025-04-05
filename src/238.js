function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(x, y) {
  return x * y;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Cannot divide by zero.");
  }
}

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  let result = base;
  for (let i = 0; i < exponent - 1; i++) {
    result *= base;
  }

  return result;
}
