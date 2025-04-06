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
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Cannot divide by zero");
  }
}

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

// Example usage:
let result = add(3, 5);
console.log(result); // Output: 8

result = subtract(10, 4);
console.log(result); // Output: 6

result = multiply(2, 7);
console.log(result); // Output: 14

result = divide(8, 2);
console.log(result); // Output: 4

result = square(3.5);
console.log(result); // Output: 12.25

result = cube(6);
console.log(result); // Output: 216
