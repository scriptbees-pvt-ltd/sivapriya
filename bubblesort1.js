function swap(arr, first_index, second_index) {
    var temp = arr[first_index];
    arr[first_index] = arr[second_index];
    arr[second_index] = temp;
}
function bubblesort(arr) {
    var len = arr.length, i, j, n;
    for (i = 0; i < len; i++) {
        for (j = 0, n = len - i; j < n; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);

            }
        }
    }
    return arr;
}
console.log(bubblesort([50, 30, 40, 20, 10]));
