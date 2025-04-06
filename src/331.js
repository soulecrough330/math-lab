function sum(a, b) {
  return a + b;
}

function calculate(n) {
  if (n >= 10) {
    const result = sum(Math.random() * n);
    console.log(`Result: ${result}`);
  } else {
    calculate(n - 5);
  }
}
