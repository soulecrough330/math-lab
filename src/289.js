// Example JavaScript code snippet to explore mathematics through experiments and simulations

function calculateArea(radius) {
    return Math.PI * radius * radius;
}

function fibonacciSequence(n) {
    let sequence = [1, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

function calculateHypotenuse(side1, side2) {
    return Math.sqrt(side1 * side1 + side2 * side2);
}
