function calculateSum(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    if (!isNaN(number)) { // Check if number is not NaN (not a number)
      sum += parseFloat(number); // Convert to float and add to sum
    }
  });
  return sum.toFixed(2); // Return the result as a string with two decimal places
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
