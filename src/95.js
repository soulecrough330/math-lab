function fibonacci(n) {
  if (n <= 1) return n;
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n - 1];
}

function fibonacciSeries(length) {
  let series = [];
  for (let i = 0; i < length; i++) {
    series.push(fibonacci(i));
  }
  return series;
}
