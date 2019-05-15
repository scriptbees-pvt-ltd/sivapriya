function bubble(items)
{
    var length=items.length;
    for(var i=0;i<length;i++)
    {
        for(var j=0;j<(length-i-1);j++)
        {
            if(items[j]>items[j+1])
            {
                var temp=items[j];
                items[j]=items[j+1];
                items[j+1]=temp;
            }
        }
    }
    return sort;
}
var sort=[8,3,2,4,1,5,7,6]
console.log(bubble(sort));

