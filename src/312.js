function sumArray(arr) {
  let sum = 0;
  arr.forEach((item) => {
    if (typeof item === 'number') {
      sum += item;
    }
  });
  return sum;
}

function getEvenNumbers(arr) {
  return arr.filter(item => item % 2 === 0);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}
