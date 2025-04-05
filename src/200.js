// Function to check if two arrays are equal
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length || JSON.stringify(arr1) !== JSON.stringify(arr2)) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!Array.isArray(arr1[i]) || !Array.isArray(arr2[i])) {
            return false;
        } else if (arraysAreEqual(arr1[i], arr2[i])) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

// Function to generate a random array of numbers between 0 and 9
function getRandomArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 10));
    }
    return array;
}

// Function to get the largest number in an array
function getMaxNumber(array) {
    if (!Array.isArray(array)) {
        throw new Error("Input must be an array.");
    }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Function to get the smallest number in an array
function getSmallestNumber(array) {
    if (!Array.isArray(array)) {
        throw new Error("Input must be an array.");
    }
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Function to get the sum of all numbers in an array
function getSum(array) {
    if (!Array.isArray(array)) {
        throw new Error("Input must be an array.");
    }
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

// Function to get the average of all numbers in an array
function getAverage(array) {
    if (!Array.isArray(array)) {
        throw new Error("Input must be an array.");
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

// Function to get the median of a sorted array
function getMedian(sortedArray) {
    if (!Array.isArray(sortedArray)) {
        throw new Error("Input must be an array.");
    }
    let start = 0, end = sortedArray.length - 1;
    while (start < end) {
        let midPoint = Math.floor((start + end) / 2);
        if (sortedArray[start] > sortedArray[end]) {
            if (end - Math.floor(midPoint) == (midPoint - start)) {
                return sortedArray[midPoint];
            } else {
                start = midPoint + 1;
            }
        } else {
            if ((start - Math.floor(midPoint)) == (sortedArray[end] - end)) {
                return sortedArray[start];
            } else {
                end = midPoint - 1;
            }
        }
    }
    return sortedArray[Math.floor(sortedArray.length / 2)];
}
