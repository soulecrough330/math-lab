function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function sumSeries(n) {
    let firstTerm = 5.5;
    let lastTerm = 10;
    let middleTerm = (firstTerm + lastTerm) / 2;

    if (n >= 3 && n <= 49) {
        console.log(`\u5E7F\u6807\u662F ${middleTerm.toFixed(2)} < n < ${middleTerm - 1}");
    } else {
        return "Invalid input";
    }
}
