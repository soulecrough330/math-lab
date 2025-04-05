function calculateArea(rectangle) {
  const width = rectangle[0];
  const height = rectangle[1];

  return width * height;
}

function drawLine(points) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  points.forEach((point, index) => {
    ctx.lineTo(point[0], point[1]);
  });

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const img = new Image();
  img.src = 'line.png';
  img.onload = function() {
    drawOnCanvas(canvas);
  };

  img.onerror = function(error) {
    console.error('Failed to load image:', error);
  };
}

function drawOnCanvas(canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const points = [
    [10, 25],
    [30, 20],
    [40, 30]
  ];

  calculateArea(points).forEach((area, index) => {
    const line = `line ${index + 1}: x=${points[index][0]}, y=${areas[index]}`;
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    ctx.lineTo(points[points.length - 1][0], points[points.length - 1][1]);

    if (area > 5) {
      ctx.strokeStyle = 'red';
    } else {
      ctx.strokeStyle = 'blue';
    }

    ctx.stroke();
  });

  drawLine(points);
}
