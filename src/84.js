function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let scores = [];
for(let i=0; i<5; i++){
    let score = getRandomInt(100);
    scores.push(score);
}
console.log(scores);

// Example of random numbers between 1 and 9
function generateRandomNumbers(limit) {
    return Math.floor(Math.random() * limit + 1);
}

let randomNumbers = generateRandomNumbers(20); // Generate 20 random numbers between 1 and 20

console.log(randomNumbers);
