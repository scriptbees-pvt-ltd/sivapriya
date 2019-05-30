var points = [40, 100, 1, 5, 25, 10];
function Myfunction1() {
    points.sort(function (a, b) { return a - b });
    console.log(points);
}
Myfunction1();