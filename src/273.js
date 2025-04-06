let sum = 0;

for (let i = 1; i <= 5; i++) {
    let number = Math.floor(Math.random() * 10);
    if (number % 2 === 0) {
        sum += number;
    }
}
console.log("The sum of even numbers between 1 and 10 is:", sum);
