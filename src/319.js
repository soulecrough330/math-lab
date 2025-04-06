function randomInt(min, max) {
    min = Math.floor(Math.random() * (max - min + 1)) + min;
    return min;
}

function getRandomString(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function randomInt(min, max) {
    min = Math.floor(Math.random() * (max - min + 1)) + min;
    return min;
}
