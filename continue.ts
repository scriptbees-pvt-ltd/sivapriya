function MyFunction1() {
    var text = "";
    var i = 0;
    while (i < 5) {
        i++;
        if (i == 3) {
            continue;
        }
        text += "The number is " + i;
    }
    console.log(text);
}
MyFunction1();