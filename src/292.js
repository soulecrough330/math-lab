function fibonacci(n) {
    if (n <= 1) return n;
    let previous = 0;
    let current = 1;
    for (let i = 2; i < n; i++) {
        [previous, current] = [current, previous + current];
    }
    return current;
}

function prime(n) {
    if (n <= 1 || n % 2 === 0) return false;

    let sqrtN = Math.sqrt(n);
    for (let divisor = 3; divisor <= sqrtN; divisor += 2) {
        if (n % divisor === 0) return false;
    }

    return true;
}

function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}
