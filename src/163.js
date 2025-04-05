function fibonacci(num) {
  if (num <= 1) return num;
  let previous = 0;
  let current = 1;
  let nextValue = 0;

  for (let i = 2; i <= num; i++) {
    nextValue = current + previous;
    previous = current;
    current = nextValue;
  }

  return nextValue;
}

function primeNumbers(limit) {
  const isPrime = (num) => {
    if (num <= 1 || num % 2 === 0) return false;

    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const numbers = [];

  for (let i = 1; i <= limit; i++) {
    if (isPrime(i)) numbers.push(i);
  }

  return numbers;
}

function sumOfSquares(n) {
  let total = 0;

  for (let i = n - 2; i >= 0; i--) {
    total += i * i;
  }

  return total;
}
