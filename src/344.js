function calculateArea(rectangle) {
  return rectangle.length * rectangle.width;
}

function calculateVolume(cylinder) {
  const height = cylinder.height;
  const radius = cylinder.radius;
  
  return Math.PI * radius * radius * height;
}

function findFurthestPoint(points) {
  let maxDistance = 0;
  for (let i = 1; i < points.length; i++) {
    if (Math.abs(points[i].x - points[0].x) > maxDistance) {
      maxDistance = Math.abs(points[i].x - points[0].x);
    }
  }
  
  return { x: points[0].x, y: points[0].y };
}

function sortByScore(scores) {
  scores.sort((a, b) => a.score - b.score);

  for (let i = 1; i < scores.length; i++) {
    scores[i] = new Score(
      scores[i],
      { x: scores[i].x, y: scores[i].y },
      { x: scores[0].x, y: scores[0].y }
    );
  }

  return scores;
}

function calculatePerimeter(circle) {
  const diameter = circle.diameter;
  
  return diameter * 2;
}
