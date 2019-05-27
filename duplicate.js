var array_with_duplicates1 = ['DELHI', 'NEWYORK', 'DELHI', 'GOA', 'MUMBAI', 'CALIFORNIA', 'GOA'];
function removeDuplicates1(arr) {
    var unique_array = [];
    for (var i = 0; i < arr.length; i++) {
        if (unique_array.indexOf(arr[i]) == -1) {
            unique_array.push(arr[i]);
        }
    }
    return unique_array;
}
console.log(removeDuplicates1(array_with_duplicates1));
