var n=4;
var sum=0;
for(var i=1;i<=n;i++)
{
if(i%2==0)
    sum = sum-1/i;
   else
   sum = sum+1/i;
}
console.log(sum);
