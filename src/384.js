function calculateArea(rectangle) {
  const width = rectangle.width;
  const height = rectangle.height;

  if (!width || !height) throw new Error('Rectangle must have both width and height.');

  const area = width * height;
  return area;
}

function drawShape(shape, scaleFactor = 1.5) {
  shape.forEach((item, index) => {
    let x = (index % shape.length + 0.5) * shape.width / 2;
    let y = Math.floor((index - (shape.length / 2)) * shape.height / 2);

    if (typeof shape !== 'object' || !Array.isArray(shape)) throw new Error('Shape must be an array.');

    const element = shape[index];
    let color = '#000000';
    
    if (element instanceof Array) {
      if (element.length > 1 && element[0] === undefined) element[0] = 'red';
      else if (element.length > 2 && element[1] === undefined) element[1] = 'blue';

      if (element.length < 4 || (element.length === 4 && index >= shape.length / 2)) {
        color = '#FF0000'; // Red
      } else if ((element.length === 3 && index >= shape.length / 2) && element[1] === 'blue') {
        color = '#008000'; // Blue
      }
    }

    fill(color);
    ellipse(x, y, scaleFactor * width, scaleFactor * height);
  });
}

function drawRectangles(rectangles) {
  rectangles.forEach(drawShape.bind(null, rectangles));
}

drawRectangles([[[1, 2], [3, 4]], [[5, 6]]]);
