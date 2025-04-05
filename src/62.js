function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sumOfSquares(n) {
  let result = n * (n + 1) * (2 * n + 1) / 6;
  return Math.round(result);
}

function isPrime(num) {
  if (num <= 1 || num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

function largestPrimeFactor(n) {
  let maxPrime = n;
  while (n % 2 === 0) {
    maxPrime = 2;
    n /= 2;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0 && n > 1) {
      if (isPrime(i)) return i;
      n /= i;
    }
  }

  if (n > 1) return n;
}

function printMathPrimes(limit) {
  for (let i = 2; i <= limit; i++) {
    const isPrimeNumber = isPrime(i);
    if (!isPrimeNumber) continue;

    console.log(`The ${i}th prime number: ${largestPrimeFactor(i)}`);
  }
}

function printFizzBuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    const fizz = i % 3 === 0 ? "fizz" : "";
    const buzz = i % 5 === 0 ? "buzz" : "";
    console.log(`${i}${fizz}${buzz}`);
  }
}
