var people = [1, 2, 3, 4, 5];
var max = people.reduce(function (a, b) { return Math.max(a, b); });
var min = people.reduce(function (a, b) { return Math.min(a, b); });
console.log(Math.max(max));
console.log(Math.min(min));
