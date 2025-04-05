function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function sumOfSquares(n) {
  let sum = n * (n + 1) / 2;

  for (let i = 2; i <= Math.sqrt(sum); i++) {
    if (sum % i === 0 && isPrime(i)) sum -= i;
  }

  return sum;
}

console.log(sumOfSquares(50));
