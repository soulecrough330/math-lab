function sumOfSquares(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}

function findLargestPrimeFactor(n) {
  while (n % 2 === 0) {
    n /= 2;
  }
  let largestPrimeFactor = 1;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      n /= i;
      largestPrimeFactor = i;
    }
  }
  if (n > 2) {
    return n;
  } else {
    return largestPrimeFactor;
  }
}

function isSymmetrical(obj) {
  const keyPairs = Object.entries(obj);
  let oddKeys = [];
  for (let pair of keyPairs) {
    if (pair[0].type !== 'number' && pair[0].type !== 'object') {
      oddKeys.push(pair[0]);
    }
  }
  return !oddKeys.length;
}

function drawRandomLine() {
  const xValues = Math.random();
  const yValues = Math.random() * 100;
  return `x=${xValues}, y=${yValues}`;
}
