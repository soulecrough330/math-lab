// Import necessary libraries or modules here if any

// Define variables and constants as needed
const PI = Math.PI;

// Function to calculate the area of a circle
function circleArea(radius) {
  const area = PI * radius ** 2;
  return area;
}

// Function to calculate the volume of a sphere
function sphereVolume(radius) {
  const volume = (4 / 3) * PI * radius ** 3;
  return volume;
}

// Example usage:
const radius = 5; // Radius of circle or sphere
console.log(`Area of the circle with radius ${radius}: ${circleArea(radius)}`);
console.log(`Volume of the sphere with radius ${radius}: ${sphereVolume(radius)}`);

// You can add more functions for calculating other mathematical concepts here
