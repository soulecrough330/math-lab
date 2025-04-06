// Define a function to simulate a simple game of rock-paper-scissors
function rockPaperScissors() {
    const choices = ['rock', 'paper', 'scissors'];
    let playerChoice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === computerChoice) {
        return "It's a tie! Play again!";
    } else if (choices.indexOf(playerChoice) < choices.indexOf(computerChoice)) {
        return "You win with rock-paper-scissors!";
    } else {
        return "Computer wins, try again.";
    }
}

// Call the function to play the game
rockPaperScissors();
