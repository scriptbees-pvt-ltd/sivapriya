function reversestring(str)
{
    newarr=str.split("");
    result=[];
    x=newarr.length;
    for(i=x;i>-1;i--)
    {
        result.push(newarr[i]);
    }
    str=result.join("");
    return str;
}
console.log(reversestring("hello"));

