function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Function to simulate simple calculations like addition or subtraction

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

// Simulate some basic math operations
let result = getRandomInt(10);
result = add(result, 5); // Perform an operation and update the result
console.log(`The result after adding ${y} is: ${result}`);

result = subtract(3, 2);
console.log(`After subtracting 2 from 3, the result is: ${result}`);
