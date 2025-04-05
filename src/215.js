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
  if (y === 0) throw new Error("Cannot divide by zero");
  return x / y;
}

function power(base, exponent) {
  if (exponent < 0 || exponent % 1 !== 0) {
    return "Invalid exponent";
  }
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function factorial(n) {
  if (n === 0) return 1;
  let result = n * factorial(n - 1);
  return result;
}
