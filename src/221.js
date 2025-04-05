function calculateTriangleArea(side1, side2, side3) {
  // Calculate the semi-perimeter of the triangle
  const s = (side1 + side2 + side3) / 2;

  // Check if the sides can form a valid triangle
  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    // Calculate and return the area of the triangle
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return area;
  } else {
    throw new Error("Invalid sides cannot form a valid triangle.");
  }
}

// Function to check the correctness of the calculateTriangleArea function
function checkTriangleArea() {
  console.log(`Sides: ${calculateTriangleArea(3, 4, 5)}, Area: ${calculateTriangleArea(3, 4, 5)} ≈ ${Math.sqrt(12)}`);
}

// Run the check function to verify the solution
checkTriangleArea();
