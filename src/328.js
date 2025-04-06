// Define an array of numbers to start with
const startNumbers = [10, 20, 30, 40, 50];

// Generate random numbers between start and end
function generateRandomArray(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

// Example usage: console.log(generateRandomArray(1, 10))
