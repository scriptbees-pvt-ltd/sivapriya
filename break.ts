function myfunction1() {
    var text = ""
    var i;
    for (i = 0; i < 5; i++) {
        if (i == 3) {
            break;
        }
        text += "The number is " + i ;
    }
    console.log(text); 
}
myfunction1();