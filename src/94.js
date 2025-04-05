function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(2, 3)); // Output: 5

function subtractNumbers(a, b) {
    return a - b;
}

console.log(subtractNumbers(10, 4)); // Output: 6

function multiplyNumbers(a, b) {
    return a * b;
}

console.log(multiplyNumbers(2, 3)); // Output: 6

function divideNumbers(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.error("Error: Division by zero is not allowed.");
    }
}

console.log(divideNumbers(10, 5)); // Output: 2
