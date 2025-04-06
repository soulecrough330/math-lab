function sumOfSquares(numbers) {
  const squaredNumbers = numbers.map(num => num ** 2);
  return squaredNumbers.reduce((a, b) => a + b, 0);
}

const data = [1, 2, 3];
console.log(sumOfSquares(data)); // Output: 14
