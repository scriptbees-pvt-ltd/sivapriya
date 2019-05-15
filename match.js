function myFunction()
{
    var str="the rain in SPAIN stays mainly in the plain";
    var res=str.match(/ain/g);
    console.log(res);
}
myFunction();