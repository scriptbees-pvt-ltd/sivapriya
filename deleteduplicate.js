function getunique(array) {
    var uniquearray = [];
    for (i = 0; i < array.length; i++) {
        if (uniquearray.indexOf(array[i]) == -1) {
            uniquearray.push(array[i]);
        }
    }
    return uniquearray;
}
var names = ["john", "peter", "harry", "clerk", "john", "alice"];
var uniquenames = getunique(names);
console.log(uniquenames);

