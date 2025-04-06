function calculateSum(start, end) {
    if (start <= 0 || end >= Math.floor(Math.random() * 100)) {
        console.log("Invalid range.");
    } else {
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        console.log(`The sum of numbers from ${start} to ${end}:`, sum);
    }
}

calculateSum(1, 10);
