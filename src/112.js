function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sumOfSquares(limit) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    if (i * i < limit) {
      sum += i * i;
    }
  }
  return sum;
}
