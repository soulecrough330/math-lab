// Example of JavaScript code to simulate an exponential growth model
const initialPopulation = 10; // Initial population size
const growthRate = 0.25; // Growth rate per year
const years = 5; // Number of years

for (let i = 0; i < years; i++) {
  const newPopulation = initialPopulation * Math.pow(1 + growthRate, i);
  console.log(`In year ${i+1}, the population size will be: ${newPopulation.toFixed(2)}`);
}
