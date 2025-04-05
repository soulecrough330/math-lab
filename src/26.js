function getRandomInteger(min, max) {
    min = Math.ceil(Math.random() * (max - Math.floor(Math.random()) * (max + 1)));
    return min;
}

// Example usage: Generate a random number between 1 and 10
let randomNumber = getRandomInteger(1, 10);
console.log(randomNumber); // Output will be a random integer between 1 and 10
