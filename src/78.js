let nums = [1, 2, 3, 4, 5];

function findMedian() {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] <= nums[j]) {
                break;
            }
            sum += nums[i];
        }
    }

    let avg = sum / (nums.length - 1);
    median(nums, average);
}

function average() {
    return Math.floor((nums.reduce((a, b) => a + b) / nums.length));
}

function median(nums, average) {
    if (nums.length % 2 === 0) {
        console.log(`Median is ${average}`);
    } else {
        let index = Math.floor((nums.length - 1) / 2);
        let num1 = nums[index];
        let num2 = nums[index + 1];

        if (num1 < num2) {
            return num1;
        } else {
            return num2;
        }
    }
}
