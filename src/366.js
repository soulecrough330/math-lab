function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('除数不能为零');
  return a / b;
}

function power(base, exponent) {
  if (exponent < 0) return Math.pow(base, -exponent);
  return base ** exponent;
}

console.log(add(5, 3)); // 输出: 8
console.log(subtract(10, 4)); // 输出: 6

try {
  console.log(multiply(2, 3));
} catch (error) {
  console.error(error.message); // 输出: 6
}
