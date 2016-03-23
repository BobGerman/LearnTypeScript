((): void => {
    var result: string = "";

    // * Regular enum *
    // Allows retrieving the original value via an indexer
    enum color {
        red,
        green,
        blue
    }
    var myColor1, myColor2 : color;
    myColor1 = color.red;
    myColor2 = color["green"];
    result += 'myColor1 = ' + color[myColor1] + '<br />';
    result += 'myColor2 = ' + color[myColor2] + '<br />';

    // * Constant enum *
    // Faster; enum values are inserted by compiler:
    const enum fastColor {
        red,
        green,
        blue
    }
    var myColor3, myColor4: fastColor;
    myColor3 = fastColor.red;
    myColor4 = fastColor["green"];
    //result += 'myColor3 = ' + fastColor[myColor3]; // COMPILER ERROR!
    result += 'myColor3 = ' + myColor3 + '<br />';
    result += 'myColor4 = ' + myColor4 + '<br />';


    document.getElementById('output')
        .innerHTML = result;
})();