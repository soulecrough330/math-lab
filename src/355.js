function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage: Generate a random integer between 0 and 9
console.log(getRandomInt(0, 10));
