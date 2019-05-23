function Selection_Sort(arr, compare_Function) {
    function compare(a, b) {
     return a - b;
     } 
    var min = 0;
    var index = 0;
    var temp = 0;
    compare_Function = compare_Function || compare;
    for (var i = 0; i < arr.length; i ++) {
      index = i;
      min = arr[i];
      for (var j = i + 1; j < arr.length; j ++) {
        if (compare_Function(min, arr[j]) > 0) {
          min = arr[j];
          index = j;
        }
      }
      temp = arr[i];
      arr[i] = min;
      arr[index] = temp;
    }
    return arr;
  }
  console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return a - b; })); 
 