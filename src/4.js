const mathLab = {
  // Experiment 1: Square Root of a Number
  sqrtOfNumber: function(number) {
    return Math.sqrt(number);
  },

  // Experiment 2: Percentage Calculator
  percentageCalculator: function(value, percent) {
    return value * (percent / 100);
  },

  // Experiment 3: Circle Area and Circumference Calculator
  circleAreaAndCircumference: function(radius) {
    const area = Math.PI * radius ** 2;
    const circumference = 2 * Math.PI * radius;
    return [area, circumference];
  },

  // Experiment 4: Rectangle Area and Perimeter Calculator
  rectangleAreaAndPerimeter: function(width, height) {
    const area = width * height;
    const perimeter = 2 * (width + height);
    return [area, perimeter];
  },
};
