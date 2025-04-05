function drawRandomShape() {
  const shape = Math.random() * 10;
  if (shape <= 5) {
    return "circle";
  } else if (shape <= 10) {
    return "square";
  } else {
    return "triangle";
  }
}

console.log(drawRandomShape());
