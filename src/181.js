function squareRoot(num) {
  if (num < 0) {
    throw new Error('Cannot compute the square root of a negative number');
  }
  
  let result = Math.sqrt(num);
  
  console.log(`The square root of ${num} is ${result}`);
}

squareRoot(16); // Example usage
