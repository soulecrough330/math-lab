function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
let randomNumber = getRandomInt(1, 10);
console.log(randomNumber); // Output a random number between 1 and 10

let secretWord = "math-lab";
let guess = getGuess();
if (guess === secretWord) {
    console.log("You guessed the word correctly!");
} else {
    console.log(`Sorry, the word was ${secretWord}.`);
}

function getGuess() {
    return prompt("Enter a letter or number:");
}
