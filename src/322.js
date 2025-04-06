function getRandomInt(min, max) {
  min = Math.ceil(Math.min(min, max));
  max = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
