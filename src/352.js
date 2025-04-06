function drawCircle(radius) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Set up the drawing context and the radius of the circle
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();

  // Add event listener to draw the circle when the window is resized
  window.addEventListener('resize', () => {
    const canvasWidth = document.documentElement.clientWidth;
    const canvasHeight = document.documentElement.clientHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Update radius based on window dimensions
    radius *= Math.min(canvas.width / 2, canvas.height / 2);
  });

  // Add the drawing function to the DOM for easy access in your HTML
  const drawCircleButton = document.getElementById('draw-circle');
  drawCircleButton.addEventListener('click', () => {
    if (canvas.width > 0 && canvas.height > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCircle(canvas.width / 2, canvas.height / 2, radius);
    }
  });

  // Add a button to exit the drawing function
  const exitButton = document.getElementById('exit');
  exitButton.addEventListener('click', () => {
    console.log('Exiting drawing function...');
  });
}
