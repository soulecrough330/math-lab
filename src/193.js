function calculateSqrt(num) {
  if (num < 0) throw new Error("Number must be non-negative.");
  
  let root = Math.sqrt(num);
  
  if (root % 1 === 0 && root.toString().includes('.') || root.toString() === 'NaN') return Number(root.toFixed(2));
  
  throw "Invalid input";
}

calculateSqrt(4); // Should return 2
