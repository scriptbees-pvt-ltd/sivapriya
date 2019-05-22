var students = [['david', 80], ['vinod', 77], ['divya', 88], ['ishitha', 95], ['thomas', 68]];
var avgmarks = 0;
for (i = 0; i < students.length; i++) {
    avgmarks += students[i][1];
    var avg = (avgmarks / students.length);
}
console.log("average grade:" + (avgmarks) / students.length);
if (avg < 60) {
    console.log("grade:F");
}
else if (avg < 70) {
    console.log("grade:D");
}
else if (avg < 80) {
    console.log("grade:C");
}
else if (avg < 90) {
    console.log("grade:B")
}
else if (avg < 100) {
    console.log("grade:A");
}
