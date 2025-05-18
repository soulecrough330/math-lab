function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
const randomNumber = getRandomInt(1, 10);
console.log(randomNumber); // Output: a random integer between 1 and 10
