// Example JavaScript code to demonstrate basic array operations

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Access and print the first element of the array
console.log(numbers[0]);

// Add two elements to the array
numbers.push(6, 7);

// Multiply all elements in the array by 2
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

// Remove the element at index 3
numbers.splice(3, 1);

// Add an element to the end of the array
numbers.push(8);

// Find and remove the first occurrence of 7
const removedElement = numbers.filter(item => item !== 7);
console.log(removedElement);

// Check if a number is in the array
function isNumberInArray(num) {
    return numbers.includes(num);
}

// Get the index of the element with value 2 in the array
const indexOfTwo = numbers.indexOf(2);

console.log(`Index of 2: ${indexOfTwo}`);
