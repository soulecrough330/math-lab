function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero.');
    }
    return a / b;
}

// Example usage
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: -2
console.log(multiply(4, 5)); // Output: 20
console.log(divide(10, 0)); // Throws an error
