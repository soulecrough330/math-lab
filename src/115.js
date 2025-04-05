// Example JavaScript code for generating a random number within a given range
const randomNumber = () => {
  const min = Math.random() * (max - min + 1);
  return Math.floor(min + Math.random() * (max - min));
};

console.log(randomNumber(10, 20)); // Output: Random integer between 10 and 20
