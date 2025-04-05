// Define a function to perform a linear regression analysis on two sets of data points.
function linearRegression(xValues, yValues) {
  const meanX = xValues.reduce((acc, val) => acc + val, 0);
  const meanY = yValues.reduce((acc, val) => acc + val, 0);

  const sumXY = xValues.reduce((acc, val) => acc + (val * yValues[val]), 0);
  const sumX = xValues.reduce((acc, val) => acc + val, 0);
  const sumY = yValues.reduce((acc, val) => acc + (val - meanY) * (yValues[val] - meanY), 0);

  return {
    slope: sumXY / meanX,
    intercept: meanY - (slope * meanX),
    rSquared: 1 - Math.pow(sumXY / (meanX * meanX), 2)
  };
}

// Example usage
const xValues = [1, 2, 3, 4, 5];
const yValues = [0.1, 0.2, 0.3, 0.4, 0.5];

console.log(linearRegression(xValues, yValues));
