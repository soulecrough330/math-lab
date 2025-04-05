function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibonacci(10)); // Output: 55
