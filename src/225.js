function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let count = 0;
let numbers = [];

while (count < 5) {
  let number = getRandomInteger(-1000, 1000);
  if (numbers.includes(number)) continue;

  if (!isNaN(number)) {
    numbers.push(number);
  }

  count++;
}

console.log(numbers);
