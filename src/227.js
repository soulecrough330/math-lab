function fibonacci(num) {
  if (num <= 1) return num;
  let previous = 0, current = 1;
  for (let i = 2; i <= num; i++) {
    [previous, current] = [current, previous + current];
  }
  return current;
}

function isPrime(num) {
  if (num <= 1) return false;
  let sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
