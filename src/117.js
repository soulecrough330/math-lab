// Example of a simple JavaScript code that generates a random number between 1 and 10

function getRandomNumber() {
    const min = 1;
    const max = 10;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumber());
