// This is a simple example of using JavaScript to simulate a dice roll.
const dice = { // Initialize the dice as 6-sided.
    sides: 6,
    roll() {
        const result = Math.floor(Math.random() * this.sides);
        console.log(`Rolled a ${result}`);
    }
};

dice.roll(); // Call the roll method on the dice object to simulate the dice roll
