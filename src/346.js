// Example of generating random numbers using JavaScript
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(10, 20));
