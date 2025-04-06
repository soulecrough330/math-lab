function fibonacci(num) {
  let a = 0;
  let b = 1;
  if (num <= 1) {
    console.log("Number is less than or equal to 1");
    return num;
  }
  for (let i = 2; i < num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
