// This is an example of a simple JavaScript code snippet.
let i = 0;
console.log(i);

function getRandomNumber(min, max) {
    min = Math.min(1, Math.random() * (max - 1));
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

// Example of a function that generates numbers and returns them
function generateNumbers(limit) {
    let numbers = [];
    for (let i = 0; i < limit; i++) {
        numbers.push(getRandomNumber(1, limit));
    }
    return numbers;
}
