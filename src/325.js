function add(a, b) {
  return a + b;
}

function multiply(x, y) {
  return x * y;
}

function average(numbers) {
  if (numbers.length === 0) {
    throw new Error('Cannot divide by zero.');
  }
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}
