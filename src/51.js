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
  if (b === 0) throw new Error("Divide by zero error");
  return a / b;
}

console.log(add(2, 3)); // Output: 5
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(5, 7)); // Output: 35
console.log(divide(8, 2)); // Output: 4
