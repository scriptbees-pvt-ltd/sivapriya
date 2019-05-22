numbers = [2, 4, 5, 6, 1, 8, 9]
var largest = numbers[0];
var smallest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest)
        largest = numbers[i];
    else if (numbers[i] < smallest)
        smallest = numbers[i];
}
console.log(largest);
console.log(smallest);
