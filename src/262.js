function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) throw new Error('Division by zero is not allowed.');
    return x / y;
}

function power(base, exponent) {
    if (exponent < 0 || !Number.isInteger(exponent)) throw new Error('Exponent must be a non-negative integer.');
    let result = base;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
