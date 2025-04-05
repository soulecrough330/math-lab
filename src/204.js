// Random number generator function
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Display math problem and user's input
function displayProblemAndUserInput(problem, userInput) {
    console.log(`Enter your answer to: ${problem}`);
    console.log(`Your guess is: ${getRandomNumber(0, 50)}`);
}

// Main function for the game
function main() {
    let question = prompt("What's 2+2?");
    const userAnswer = prompt("How many points do you think are there in this circle?");

    if (userAnswer === "6") {
        alert("Correct!");
    } else {
        alert(`Sorry, your answer was ${userAnswer}.`);
        displayProblemAndUserInput(question + " is right. Please try again.", userAnswer);
    }
}

main();
