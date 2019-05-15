var arr=[1,2,3,4,5,7,8,9];
           function binarySearch(arr,item)
           {
               var firstindex=0,lastindex=arr.length-1,midvalue=Math.floor((lastindex+firstindex)/2);
               while(arr[midvalue] != item && firstindex < lastindex)
                {
                   if(item < arr[midvalue])
                   {
                       lastindex=midvalue-1;
                   }
                   else if(item > arr[midvalue])
                   {
                       firstindex=midvalue+1;
                   }
                   midvalue = Math.floor((lastindex+firstindex)/2);
                }
               return (arr[midvalue] !=item) ? -1 : midvalue;
           }
            var res=binarySearch(arr,1);
            var res1=binarySearch(arr,5);
            console.log("binary search result is:",res);
            console.log("binary search result is:",res1);