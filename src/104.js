function calculateSum(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(calculateSum([1, 2, 3])); // Output: 6
console.log(reverseString("hello")); // Output: "olleh"
