function displayMath() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);

  if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  const result = num1 + num2;

  console.log(`${result}`);
}
