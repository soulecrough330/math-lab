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
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Division by zero is not allowed.");
  }
}

function square(x) {
  return x * x;
}

function cube(x) {
  return x ** 3;
}

function exponentiate(base, exponent) {
  if (exponent === 0) {
    return 1; // Any number to the power of 0 is 1
  } else {
    return base ** exponent;
  }
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}
