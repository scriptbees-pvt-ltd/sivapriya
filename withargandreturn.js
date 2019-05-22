function concatenate(first, last) {
    var full;
    full = first + last;
    return full;
}
function secondfun() {
    var result;
    result = concatenate('john', 'smith');
    console.log(result);
}
secondfun();