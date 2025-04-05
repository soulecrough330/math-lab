function calculateSum(range1, range2) {
  let sum = 0;
  
  // Add values from the first range to the variable "sum"
  for (let i = 0; i < range1; i++) {
    sum += i;
  }
  
  return sum;
}

console.log(calculateSum(5, 3));
