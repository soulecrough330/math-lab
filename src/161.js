function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, c;
  for (let i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = n * factorial(n - 1);
  return result;
}
