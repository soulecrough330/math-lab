// This is an example of a simple random number generator.
function getRandomInteger(min, max) {
    min = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    return min;
}

// Generate a random integer between 0 and the maximum value allowed for that function.
function generateRandomInt(maxValue) {
    return getRandomInteger(0, maxValue);
}
