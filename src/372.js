function createRandomArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

function printArray(array) {
  console.log(array);
}
