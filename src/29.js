function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(x, y) {
  return x * y;
}

function divide(num1, num2) {
  if (num2 === 0) throw "Division by zero is not allowed.";
  return num1 / num2;
}
