function calculateArea(rectLength, rectWidth) {
    return rectLength * rectWidth;
}

function sumNumbers(numbers) {
    let total = 0;
    numbers.forEach(number => {
        total += number;
    });
    return total;
}

console.log(calculateArea(10, 5));
console.log(sumNumbers([1, 2, 3]));
