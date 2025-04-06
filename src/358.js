function add(a, b) {
    console.log("ADDING: ", a + b);
}

function subtract(a, b) {
    console.log("SUBTRACTING: ", a - b);
}

function multiply(a, b) {
    console.log("MULTIPLYING: ", a * b);
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error('Cannot divide by zero.');
    }
}

add(5, 3);
subtract(10, 4);
multiply(7, 2);
divide(9, 3);
