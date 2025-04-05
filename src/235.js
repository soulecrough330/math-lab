function fibonacci(n) {
    if (n <= 1) return n;
    let previous = 0,
        current = 1,
        next;

    for (let i = 2; i < n; i++) {
        next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}

function quickSort(arr, left, right) {
    if (left >= right) return arr;

    let pivotIndex = partition(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
}

function partition(arr, left, right) {
    const pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        if (arr[i] < pivot) {
            swap(arr, i, j);
            i++;
            j--;
        } else if (arr[j] >= pivot) {
            j--;
        }
    }

    return j;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
