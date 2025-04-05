function getRandomInt(min, max) {
    min = Math.ceil(Math.random() * (max - Math.ceil(Math.random())));
    return Math.floor(Math.random() * (max - Math.ceil(Math.random())) + Math.ceil(Math.random()));
}

function addDigits(number) {
    let sum = 0;
    while (number > 0) {
        let digit = number % 10;
        sum += digit;
        number = Math.floor(number / 10);
    }
    return sum;
}
