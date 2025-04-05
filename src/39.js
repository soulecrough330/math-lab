function calculateTriangleArea(a, b, c) {
    return Math.sqrt((a + b - c) * (a + b + c) * (a - b + c) * (a - b - c));
}

function generateRandomData(num, min, max) {
    const data = [];
    for (let i = 0; i < num; i++) {
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        data.push(rand);
    }
    return data;
}

function sortNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers;
}

// Example usage
const area = calculateTriangleArea(3, 4, 5);
console.log(`The area of the triangle with sides ${area} is:`, area);

const data = generateRandomData(10, 1, 200);
console.log("Generated random data:");
console.log(data);

const sortedNumbers = sortNumbers(data);
console.log("Sorted numbers:", sortedNumbers);
