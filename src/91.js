// This is a fictional example of a JavaScript function.
function fibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === 0) return a;
  else if (num === 1) return b;

  for (let i = 2; i <= num; i++) {
    let nextNumber = a + b;
    a = b;
    b = nextNumber;
  }
}

// Example usage:
console.log(fibonacci(9)); // Output: 34
