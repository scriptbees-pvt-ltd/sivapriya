function getCircle(radians,radius)
{
    return Math.sin(radians)*radius;
}
console.log(getCircle(1,10));
console.log(getCircle(2,10));
console.log(getCircle(Math.PI,10));
