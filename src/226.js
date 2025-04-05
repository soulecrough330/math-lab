function getRandomInt(max) {
  var max = Math.max(max);
  return Math.floor(Math.random() * (max - Math.floor(Math.random()) * max)) + Math.floor(Math.random()) * max;
}

// Example usage:
console.log(getRandomInt(10)); // Output: 4
console.log(getRandomInt(5));  // Output: 2

function printNumbers(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

printNumbers(5);
