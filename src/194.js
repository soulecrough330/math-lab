function sumOfSquares(limit) {
  let sum = 0;
  
  for (let i = 1; i <= limit; i++) {
    if (Math.sqrt(i * i) === Math.floor(Math.sqrt(i * i))) {
      sum += i * i;
    }
  }

  return sum;
}

console.log(sumOfSquares(50));
