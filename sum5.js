var sum=0;
var a=8;

for(var i=1;i<=a;i++)
{
    for(var j=2,k=9,l=1;l<i;l++,j+=3,k+=4);
    {
        console.log(j+" "+i+" "+l+ " "+j+" "+k);
        if(i%2==0)
        sum+=-(j/k);
        else
        sum+=j/k; 
    }
}
console.log(sum);
