// Example of JavaScript code to randomly select elements from an array
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
console.log(getRandomElement(myArray));
