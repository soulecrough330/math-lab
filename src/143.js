// Initialize canvas elements
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Define colors
let colors = ['#ff0000', '#008000', '#0000ff'];

// Function to draw a square with the specified color and size
function drawSquare(x, y, width, height) {
  // Create a new rectangle shape
  let rect = ctx.createRectAngle(x, y, width, height);

  // Set stroke style for border
  rect.fillStyle = '#000';
  rect.fill();

  // Draw square using the stroke and fill styles
  canvas.width = rect.width + 5;
  canvas.height = rect.height * 2 + 10;

  // Add square to the canvas
  ctx.fillStyle = colors[3];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Function to draw a circle with the specified radius and color
function drawCircle(x, y, r) {
  let arc = ctx.createArc(x, y, r, Math.PI * 2, 0, true);

  // Set stroke style for boundary
  arc.fillStyle = '#ff0000';
  arc.fill();

  // Draw circle using the stroke and fill styles
  canvas.width = arc.width + 5;
  canvas.height = arc.height * 2 + 10;

  // Add circle to the canvas
  ctx.fillStyle = colors[4];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Function to draw a line with specified points and color
function drawLine(x1, y1, x2, y2, radius) {
  let line = ctx.createLine(x1, y1, x2, y2);

  // Set stroke style for boundary
  line.strokeStyle = '#008000';
  line.stroke();

  // Draw line using the stroke and fill styles
  canvas.width = line.width + 5;
  canvas.height = line.height * 2 + 10;

  // Add line to the canvas
  ctx.fillStyle = colors[3];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Function to draw a triangle with specified vertices and color
function drawTriangle(x1, y1, x2, y2, x3, y3) {
  let points = [x1, y1, x2, y2, x3, y3];

  // Set stroke style for boundary
  ctx.beginPath();
  ctx.moveTo(points[0]);
  ctx.lineTo(points[1]);
  ctx.lineTo(points[2]);
  ctx.lineTo(points[3]);
  ctx.closePath();

  // Draw triangle using the stroke and fill styles
  canvas.width = points.length * (canvas.width + 5);
  canvas.height = points.length * (canvas.height + 5) - 5;

  // Add triangle to the canvas
  ctx.fillStyle = colors[4];
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Fill the interior circle inside the triangle with the specified radius
  drawCircle(x2, y2, Math.sqrt(points.length * (points.length + 1) / 2));
}
