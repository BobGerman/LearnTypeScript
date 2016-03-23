((): void => {
    var result = "";

    // * Arrow function syntax *
    var myFunc : (nx:number) => number =
        (n:number) => {
            return n+1;
        }
    result += '<br />myFunc(100) = ' + myFunc(100);

    // * Constants *
    const favoriteNumber = 42;
    //favoriteNumber = 52;      // COMPILER ERROR!

    // Let statement for block scope
    let z = -1;
    result += "<br />Looping through values of z: ";
    for (let z=1; z<10; z++) {
        result += z.toString() + " * ";
    }
    if (z === -1) {
        result += "<br />After the loop z is still " + z.toString(); // -1
    }

    // * Object Destructuring *
    interface IColor {red: number, green: number, blue:number}; 
    var favoriteColor: IColor = {red: 20, green: 20, blue: 255};
    var {red, green, blue} = favoriteColor;
    result += '<br/>Favorite color: ' + red + ',' + green + ',' + blue;

    // * Array destructuring *
    var fibs: number[] = [1, 1, 2, 3, 5, 8];
    var [f1, f2, f3, f4, f5, f6] = fibs;
    result += '<br />Fibs: ' + f1 + ' ' + f2 + ' ' + f3 + ' ' + f4 + ' ' + f5 + ' ' + f6

    // * for ... of *
    result += '<br />Keys in fibs array: ';
    for (let f in fibs) {   // for .. in iterates keys
        result += f + ' ';
    }
    result += '<br/>Values in fibs array: ';
    for (let f of fibs) {   // for .. of iterates values
        result += f + ' '
    }

    // * Template strings *
    var ancestors: string = 'parents';
    var peers: string = 'people';
    
    var address: string = `Four score and seven years ago our ${ancestors} 
                           brought forth on this continent, a new nation,
                           conceived in Liberty, and dedicated to the
                           proposition all ${peers} are created equal.`;
    result += '<br />' + address;

    // * Exponents - so new it's not in ES6 yet *
    var exp1 = 2 ** 3;
    result += '<br />exp1=' + exp1;
    var exp2 = 5;
    exp2 **= 3;
    result += '<br />exp2=' + exp2;

    document.getElementById('output').innerHTML = 
        result;
})();