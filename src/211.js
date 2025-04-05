function calculateVolume(height, baseArea) {
    const volume = height * baseArea;
    return volume;
}

const radius = 5;
const baseRadius = 3;
const volume = calculateVolume(radius, baseRadius);
console.log(`The volume is ${volume} cubic units.`);
