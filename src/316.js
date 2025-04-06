// Example 1: Basic arithmetic operations
console.log(2 + 3);
console.log(5 - 2);
console.log(8 * 4);
console.log(6 / 2);

// Example 2: Range of numbers
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Example 3: Math functions like square root, PI
console.log(Math.sqrt(9)); // Square root of 9
console.log(Math.PI); // π value (3.14159)

// Example 4: Looping and conditional statements
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`Even ${i}`);
    } else {
        console.log(`Odd ${i}`);
    }
}

// Example 5: Array manipulation
const numbers = [1, 4, 6, 9, 12];
console.log(numbers);
numbers.push(8); // Add a new element to the end of the array
numbers.unshift(3); // Insert a new element at the beginning of the array
numbers.pop(); // Remove and return an element from the array
console.log(numbers);

// Example 6: Function definitions and calls
function add(a, b) {
    return a + b;
}
const result = add(5, 7);
console.log(result);

// Example 7: Objects with properties
let person = {
    name: "Alice",
    age: 30,
    address: "New York"
};
console.log(person.name); // Get the value of a property
person.address = "Los Angeles";
console.log(person.address); // Update or get the value of an existing property

// Example 8: Iterating through arrays with loops and functions
const colors = ["red", "green", "blue"];
colors.forEach(color => {
    console.log(`Selected color: ${color}`);
});

function displayMessage(message) {
    console.log(message);
}
displayMessage("Hello, this is a JavaScript code!");
