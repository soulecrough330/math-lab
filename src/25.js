function calculateArea(circleRadius, circleHeight) {
  return Math.PI * circleRadius * circleHeight;
}

function calculateVolume(sphereDiameter, sphereHeight) {
  const radius = sphereDiameter / 2;
  return (1/3) * Math.PI * radius ** 2 * sphereHeight;
}
