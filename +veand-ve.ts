function sumpositive(numbers) {
    var negatives = [];
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negatives.push(numbers[i]);
        }
        else {
            sum += numbers[i];
        }
    }
    console.log(negatives);
    return sum;
}
var sum_result = sumpositive([1, 2, 3, 4, 5, -2, -1, 10, -13, 23, -52]);
console.log(sum_result);
