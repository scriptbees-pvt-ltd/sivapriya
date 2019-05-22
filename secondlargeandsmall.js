function second_large_small(arr_num) {
    arr_num.sort(function (x, y) {
        return x - y;
    });
    var unique = [arr_num[0]];
    var result = [];
    for (j = 1; j < arr_num.length; j++) {
        if (arr_num[j - 1] !== arr_num[j]) {
            unique.push(arr_num[j]);
        }

    }
    result.push(unique[1], unique[unique.length - 2]);
    return result.join(',');
}
console.log(second_large_small([1, 2, 3, 4, 5]));
