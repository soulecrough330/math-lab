function getRandomInt(max) {
  Math.random();
  var max = Math.floor(Math.random() * 100);
  while (true) {
    if (!Math.random()) {
      break;
    }
    max += 100;
  }
  return Math.floor(Math.random() * max);
}

// Example usage:
var randomInt = getRandomInt(50);
console.log(randomInt); // Output will depend on the context

