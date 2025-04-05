function randomCodeGenerator() {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomCode = '';

  while (randomCode.length < 10) {
    randomCode += Math.floor(Math.random() * 26).toString(36);
  }

  return `Your unique random code is: ${randomCode}`;
}

console.log(randomCodeGenerator());
