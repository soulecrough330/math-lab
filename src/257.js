function findMinimizer(targetFunction) {
    const initialGuess = 1.0; // Initial guess
    let currentMinimum = targetFunction(initialGuess);
    while (Math.abs(currentMinimum - targetFunction(initialGuess)) > Math.pow(10, -8)) { // Set an epsilon value to control precision
        initialGuess -= 0.1;
        currentMinimum = targetFunction(initialGuess);
    }
    return currentMinimum;
}

function calculateGaussianDistribution(mean, stdDev, numberOfPoints) {
    const sumOfSquares = Math.pow(numberOfPoints, 2) * stdDev ** 2; // Calculate the sum of squares
    const meanValue = (mean + stdDev) / 2.0; // Average value around the mean
    const squaredDifference = (numberOfPoints - 1) * ((mean - meanValue).toFixed(3)); // Calculate the squared differences for each point
    const variance = sumOfSquares / numberOfPoints - squaredDifference ** 2; // Calculate the variance
    return { variance, mean: mean, standardDeviation: Math.sqrt(variance) };
}

function simulateRandomWalks(N, maxStepsPerStep, stepProbability, seed) {
    let numberOfSteps = 0;
    const startPoint = 1.0; // Initial point on a line
    let currentPoint = startPoint; // Current position after each step

    while (numberOfSteps < N && Math.abs(currentPoint - startPoint) <= maxStepsPerStep) { // Set an epsilon value to control precision
        if (Math.random() < stepProbability) {
            currentPoint += stepProbability * (Math.random() - 0.5); // Step up or down with probability specified by stepProbability
        } else {
            const randomIndex = Math.floor(Math.random() * N);
            currentPoint += (stepProbability / N) * (steps[randomIndex] - startPoint); // Choose a random direction and move in that direction
        }
        numberOfSteps++;
    }

    return { numberOfSteps, startPoint: startIndex, endPoint: endIndex };
}
