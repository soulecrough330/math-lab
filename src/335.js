// Example: Basic JavaScript loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Example: Function with parameters and arguments
function addNumbers(a, b) {
    const sum = a + b;
    return sum;
}

console.log(addNumbers(5, 3)); // Output: 8

// Example: Array manipulation
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.pop(); // Remove and return the last element
const filteredNumbers = numbers.filter(num => num > 0);

console.log(filteredNumbers); // Output: [1, 2, 3]

// Example: Using JSON.stringify for string formatting
let person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};

console.log(JSON.stringify(person)); // Output:
