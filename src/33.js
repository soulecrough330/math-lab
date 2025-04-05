function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function countPrimes(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

function sumOfSquares(a, b, c) {
  const result = a * a + b * b + c * c;
  return result;
}
