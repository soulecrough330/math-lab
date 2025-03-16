// Randomly generated JS code for math-lab experiment

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function simulateRollDie(numSides) {
  const roll = randNum(1, numSides);
  return roll;
}

// Test the simulateRollDie function with different numbers of sides
console.log("Simulating a roll of a 4-sided die:");
console.log(simulateRollDie(4));

console.log("Simulating a roll of an 8-sided die:");
console.log(simulateRollDie(8));

console.log("Simulating a roll of a 20-sided die:");
console.log(simulateRollDie(20));
