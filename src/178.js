function squareRoot(value) {
  if (value < 0) throw "Cannot calculate the square root of a negative number";
  let sqrt = Math.sqrt(value);
  console.log(`The square root of ${value} is: ${sqrt}`);
}
