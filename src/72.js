function calculateSquareRoot(num) {
  if (num < 0) throw new Error("Cannot compute square root of a negative number");
  
  const result = Math.sqrt(num);
  console.log(`The square root of ${num} is: ${result}`);
}

calculateSquareRoot(16);
