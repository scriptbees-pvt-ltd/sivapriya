var lcm = function (n1, n2) {
    var large = Math.max(n1, n2);
    var small = Math.min(n1, n2);
    var i = large;
    while (i % small !== 0) {
        i += large;
    }
    return i;
};
console.log(lcm(8, 28));
