function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0;
  let b = 1;
  let result = 0;
  while (a < n) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}

function sumNumbers(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function createMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
    for (let j = 0; j < cols; j++) {
      if (j % 2 === 0) {
        matrix[i].push(Math.floor(Math.random() * 10));
      } else {
        matrix[i].push(Math.floor(Math.random() * 10));
      }
    }
  }
  return matrix;
}

function checkMatrix(matrix, expectedValue) {
  let actualValue = sumNumbers(fibonacci(5));

  if (actualValue === expectedValue) {
    console.log("Test passed: Correct sum of Fibonacci numbers.");
  } else {
    console.error(`Test failed: Expected ${expectedValue}, but got ${actualValue}.`);
  }
}

// Example usage:
const rows = 4;
const cols = 5;

checkMatrix(createMatrix(rows, cols), fibonacci(5));
