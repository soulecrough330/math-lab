function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function sumOfDigits(n) {
  let result = 0;
  while (n > 0) {
    let digit = n % 10;
    result += digit;
    n = Math.floor(n / 10);
  }
  return result;
}

function isEven(num) {
  if (num === 0) return true;
  return num % 2 === 0;
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function findFactors(n) {
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && isEven(i)) {
      factors.push(i);
    }
  }
  return factors;
}
