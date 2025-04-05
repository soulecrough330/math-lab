function fibonacci(n) {
    let a = 0;
    let b = 1;

    if (n === 0 || n === 1) {
        return n;
    }

    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
}

fibonacci(6);
