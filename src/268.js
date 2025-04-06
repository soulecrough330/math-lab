function randomize(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
