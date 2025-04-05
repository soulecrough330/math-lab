// example of a simple calculator
console.log("Enter first number:");
const num1 = parseFloat(prompt());

console.log(`Enter operator: ( + - * / )`);
const operator = prompt().toLowerCase();

console.log(`Enter second number: `);
const num2 = parseFloat(prompt());

switch(operator) {
  case "+":
    console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    break;
  case "-":
    console.log(num1 - " + " + num2 + " = " + (num1 - num2));
    break;
  case "*":
    console.log(num1 * " + " + num2 + " = " + (num1 * num2));
    break;
  case "/":
    if (num2 !== 0) {
      console.log(num1 / " + " + num2 + " = " + (num1 / num2));
    } else {
      console.log("Error: Division by zero");
    }
    break;
  default:
    console.log("Unknown operator");
}
