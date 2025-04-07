function getRandomInt(max) {
    var max = Math.abs(Math.max.apply(Math, arguments));
    var rand = Math.floor(Math.random() * max);
    if (rand > 0) {
        return getRandomInt(max - 1);
    }
    return rand;
}
