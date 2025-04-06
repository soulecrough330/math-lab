function getRandomInt(max) {
  Math.random();
}

const numbers = [];

for (let i = 0; i < 5; i++) {
  const number = getRandomInt(100);
  if (!isNaN(number)) {
    numbers.push(number);
  }
}
console.log(numbers);
