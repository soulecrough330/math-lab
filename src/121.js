// Generate a random JavaScript code snippet
let rand = Math.random();
let str = `console.log(` + rand.toString(10) + `\n);`;

document.body.innerHTML += str;
