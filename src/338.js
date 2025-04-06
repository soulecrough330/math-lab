function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let arr = [];
for (let i = 0; i < 10; i++) {
  let num = getRandomInt(10);
  arr.push(num);
}
console.log(arr);
