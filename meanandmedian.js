var numbers = [3, 5, 2, 9, 10, 12];
var len = numbers.length;
function mean(numbers) {
    var total = 0, i;
    for (i = 0; i < len; i++) {
        total += numbers[i];
    }
    return total / len;
}
function median(numbers) {
    var median = 0, numslen = numbers.length;
    if (numslen % 2 == 0) {
        median = (numbers[numslen / 2 - 1] + numbers[numslen / 2]) / 2;
    }
    else {
        median = numbers[(numslen - 1) / 2];
    }
    return median;
}
var n1 = mean(numbers);
var n2 = median(numbers);
console.log(n1);
console.log(n2);
