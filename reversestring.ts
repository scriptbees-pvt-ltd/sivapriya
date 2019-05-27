function reverse(str) {
    var chars = str.split("");
    var length = chars.length;
    var char = length / 2;
    for (var i = 0; i < char; i++) {
        var temp = chars[i];
        var j = length - i - 1;
        chars[i] = chars[j];
        chars[j] = temp;
    }
    return chars.join("");
}

console.log(reverse("abcd"));
console.log(reverse("abcde"));