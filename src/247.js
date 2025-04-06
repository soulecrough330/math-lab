function getRandomInteger(min, max) {
    min = Math.ceil(Math.random() * (max - Math.floor(Math.random())) + Math.floor(Math.random()));
    return Math.floor(Math.random() * (max - min)) + min;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1;
    for (let i = 2; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let leftHalf = mergeSort(arr.slice(0, mid));
    let rightHalf = mergeSort(arr.slice(mid));

    return merge(leftHalf, rightHalf);
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivotIndex = Math.floor(arr.length / 2);
    const pivotValue = arr[pivotIndex];
    const leftPart = arr.filter(item => item < pivotValue);
    const rightPart = arr.filter(item => item === pivotValue);
    const sortedLeft = quickSort(leftPart);
    const sortedRight = quickSort(rightPart);

    return [sortedLeft, sortedRight];
}

function sortArray(arr) {
    let count = (arr.length) * Math.random();
    while (count > 0 && count > arr.length / 2) {
        console.log(count)
        count = arr[Math.floor(Math.random() * (arr.length - 1)) + 1] % arr.length;
    }
}

function createRandomArray(size, min, max) {
    return Math.random() * (max - min) + min; // randomize array size
}

// Example usage:
const [sortedArray] = sortArray([3, 6, 8, 2, 1, 4]);
console.log(sortedArray);

const numbers = createRandomArray(10, 0, 100);
bubbleSort(numbers);
insertionSort(numbers);
mergeSort(numbers);
quickSort(numbers);

function calculateMedianOfThree(arr) {
    let n = arr.length;
    if (n % 2 === 0) return ((arr[Math.floor(n / 2 - 1)] + arr[Math.floor(n / 2)]) / 2);
}

// Example usage:
const [median] = calculateMedianOfThree([3, 6, 8, 2, 1, 4]);
console.log(median);

// Function to test the various sorting functions with a given array
function checkSorting(arr) {
    console.log(`Original Array: ${arr}`);
    console.log(`After Bubble Sort: ${bubbleSort([...arr])}`);
    console.log(`After Insertion Sort: ${insertionSort([...arr])}`);
    console.log(`After Merge Sort: ${mergeSort([...arr])}`);
    console.log(`After Quick Sort: ${quickSort([...arr])}`);

    // Check if the array is sorted
    const isSorted = [...arr].sort((a, b) => a - b).toString() === [...arr].toString();
    console.log(`Original Array: ${arr.toString()}`);
    console.log(`Is Sorted (Bubble Sort): ${isSorted && arr.length === 0 ? 'True' : 'False'}`);
    console.log(`Is Sorted (Insertion Sort): ${isSorted && arr.length === 1 ? 'True' : 'False'}`);
    console.log(`Is Sorted (Merge Sort): ${isSorted && arr.length >= 3 ? 'True' : 'False'}`);
    console.log(`Is Sorted (Quick Sort): ${isSorted && arr.length >= 2 ? 'True' : 'False'}`);

    // Check if the median of three numbers is correctly calculated
    console.log(`Median of Three Numbers: ${calculateMedianOfThree([3, 6, 8, 2, 1, 4])}`);
}

createRandomArray(5, 0, 10);
checkSorting(createRandomArray(5, 0, 10));
