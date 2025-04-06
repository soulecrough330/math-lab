function add(a, b) {
  console.log("Adding: " + a + " + " + b);
}

function subtract(a, b) {
  console.log("Subtracting: " + a + " - " + b);
}

function multiply(a, b) {
  console.log("Multiplying: " + a + " * " + b);
}

function divide(a, b) {
  if (b !== 0) {
    console.log("Dividing: " + a + " / " + b);
    return a / b;
  } else {
    console.error("Cannot divide by zero!");
  }
}
