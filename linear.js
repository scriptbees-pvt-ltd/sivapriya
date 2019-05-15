var arr=[1,5,8,3,9,2];
function linearSearch(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == item) { 
                return i;
        }
    }

    return null;
}
var res=linearSearch(arr,9);
console.log(res);