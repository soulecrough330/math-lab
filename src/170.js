// Exercise 1: Simple Calculator

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        throw "Error: Division by zero is not allowed.";
    }
}

// Exercise 2: Factorial Calculator

function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}

// Exercise 3: Generate a random password

function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';

    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    return password;
}

// Exercise 4: Bubble Sort

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// Exercise 5: Insertion Sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    return arr;
}

// Exercise 6: Quick Sort

function quickSort(arr) {
    let pivot = arr[arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            [arr[i], arr[--i]] = [arr[--i], arr[i]];
        }
    }

    return arr;
}

// Exercise 7: Merge Sort

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Exercise 8: Selection Sort

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

// Exercise 9: Counting Sort

function countingSort(arr) {
    const count = new Array(20).fill(0);

    for (let num of arr) {
        count[Math.floor(num / 10)]++;
    }

    let output = [];

    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            output.push(Math.floor(i / 10 + 1));
            count[i]--;
        }
    }

    return output;
}

// Exercise 10: Radix Sort

function radixSort(arr) {
    let max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);

    for (let num of arr) {
        count[Math.floor(num / 10)]++;
    }

    for (let i = 0; i < count.length - 1; i++) {
        let index = Math.floor(count[i] / count[i + 1]);
        while (index--) {
            arr.splice(index, 0, ...arr.splice(0, i + 1));
        }
    }

    return arr;
}

// Exercise 11: In-place Merge Sort

function inPlaceMergeSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n / 2; i++) {
        if (arr[i] > arr[n - i - 1]) {
            [arr[i], arr[--n]] = [arr[--n], arr[i]];
        }
    }

    return arr;
}

// Exercise 12: Heap Sort

function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2); i > 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 1);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;

    const left = (i * 2 + 1);
    const right = (i * 2 + 2);

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Exercise 13: Shell Sort

function shellSort(arr) {
    let n = arr.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = 0; i < n - gap; i++) {
            [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        }
    }

    return arr;
}
