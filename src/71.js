// This is a simple JavaScript code that performs basic arithmetic operations.
// The code takes two numbers as input and calculates their sum.

function addNumbers(a, b) {
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Divide by zero error");
  }
  return a / b;
}
