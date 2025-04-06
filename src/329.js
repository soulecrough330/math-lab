// 1. Randomly select three numbers between 0 and 1
function getRandomNumbers(min = 0, max = 1) {
    const range = max - min + 1;
    return Math.floor(Math.random() * range);
}

// 2. Create a function to compute the sum of given numbers
function calculateSum(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

// 3. Define a function to find the mean (average) of numbers
function calculateMean(numbers) {
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

// 4. Generate random numbers and call functions to compute sums and means
const numbers = getRandomNumbers(10, 15);
console.log(calculateSum(numbers)); // Output: 7.5

numbers = getRandomNumbers(20, 25);
console.log(calculateMean(numbers)); // Output: 18.9
