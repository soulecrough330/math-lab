// 生成随机数
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 计算平方根
function sqrt(a) {
    if (a < 0) {
        throw new Error('平方根不存在于实数范围内');
    }
    return Math.sqrt(a);
}
