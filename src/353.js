function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function findGreatestCommonDivisor(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function generateRandomArray(length, minValue, maxValue) {
  return Array.from({ length: length }, () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
}

console.log(calculateSum(5)); // Output: 15
console.log(findGreatestCommonDivisor(8, 32)); // Output: 16
console.log(generateRandomArray(10, 0, 100)); // Output a random array with length 10 and values between 0 and 100
