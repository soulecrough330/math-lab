function addNumbers(x, y) {
  const sum = x + y;
  return sum;
}

function calculatePower(base, exponent) {
  const power = base ** exponent;
  return power;
}

function findMaxValues(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
