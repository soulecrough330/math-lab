function findLargestNumber(nums) {
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
}

function checkPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}
