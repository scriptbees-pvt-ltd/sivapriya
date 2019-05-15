var array1 = [2,6,8,10];
var array2 = [2,3,4,5];
var sum = array1.map(function (num, idx) 
{
  return num + array2[idx];
}); 
var subtract=array1.map(function(num,idx)
{
  return num - array2[idx];
});
var multiply=array1.map(function(num,idx)
{
  return num * array2[idx];
});
var division=array1.map(function(num1,idx)
{
  return num1 / array2[idx];
});
console.log(sum);
console.log(subtract);
console.log(multiply);
console.log(division);