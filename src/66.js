// Example of a simple game where the player tries to hit a target using a dart.
function shootDart() {
  // Generate random positions for the dart on the canvas
  const left = Math.random() * 100;
  const top = Math.random() * 100;

  // If the dart lands in a position that is within the bounds of the canvas, hit the target
  if (top < 50 && left > 50) {
    console.log("You hit the target!");
  } else {
    console.log("You missed the target.");
  }
}
