function getRandomInt(max) {
  Math.random();
  let randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
}

let score = 0;
let count = 0;

while (true) {
  const answer = Math.floor(Math.random() * 100 + 1);
  console.log(`Player ${count}: What is the result of multiplying $${Math.floor(Math.random() * 10)} by itself?`);
  let input = Number(readline());

  if (input === answer) {
    score++;
    break;
  }
}

console.log(`You got it right! Your final score is: ${score}`);
