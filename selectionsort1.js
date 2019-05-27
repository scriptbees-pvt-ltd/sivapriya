var selectionSort = function(array){
    for(var i = 0; i < array.length; i++){
      var min = i;
      for(var j = i+1; j < array.length; j++){
        if(array[j] < array[min]){
         min = j;
        }
      }
      var temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
    return array;
  };
  var array = [30,20,10,1,50,40]
  console.log(selectionSort(array));