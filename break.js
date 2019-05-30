function myfunction() {
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
        if (i == 3) {
            break;
        }
        text += "The number is " + i;
    }
    console.log('\n');
    console.log(text);
    // console.log('\n');
}
myfunction();
