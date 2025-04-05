function drawTriangle(side) {
  let height = side / 2;
  let base = side - height;
  console.log("Drawing a triangle with sides:", side, "and height", height);
  if (base > 0) {
    for (let i = 1; i <= base + 1; i++) {
      console.log(`Triangle ${i} is formed by two segments of length ${side / 2}`);
    }
  } else {
    console.log("The given side cannot form a valid triangle.");
  }
}

function drawSquare(side) {
  let base = side;
  for (let i = 1; i <= side; i++) {
    console.log(`Side ${i} is formed by two segments of length ${side / 2}`);
  }
}

drawTriangle(10);
drawSquare(5);
