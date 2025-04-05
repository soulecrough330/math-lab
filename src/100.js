function fibonacci(n) {
  if (n <= 0) return "Invalid input";
  if (n === 1 || n === 2) return 1;
  let a = 0, b = 1, c = 0;

  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

console.log(fibonacci(10));
