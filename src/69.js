function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
let randomNumber = getRandomInt(1, 100);
console.log(randomNumber); // Output a random number between 1 and 100
