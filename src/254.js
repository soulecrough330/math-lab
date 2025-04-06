function createSquare(side) {
  let square = document.createElement('div');
  square.classList.add('square', 'side-' + side);
  square.style.width = "100px";
  square.style.height = "100px";
  return square;
}

function draw() {
  const squares = document.querySelectorAll('.square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.border = '1px solid black';
    squares[i].style.backgroundColor = `linear-gradient(to right, #ff7c4f, #e39528)`;
    if (i % 2 === 0) {
      squares[i].style.cursor = "pointer";
    }
  }
}

function main() {
  draw();
}
main();
