function squareRoot(x) {
  if (x < 0) {
    throw new Error("Cannot compute the square root of a negative number");
  }
  return Math.sqrt(x);
}

// Example usage:
console.log(squareRoot(16)); // Outputs: 4.0
