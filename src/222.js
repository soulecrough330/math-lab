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
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
}

function power(x, n) {
    let result = x;
    for (let i = 1; i <= n; i++) {
        result *= x;
    }
    return result;
}
