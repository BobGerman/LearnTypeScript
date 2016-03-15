((): void => {
    var result = "";
    //
    // Arrow function syntax
    //
    var myFunc : (nx:number) => number =
        (n:number) => {
            return n+1;
        }
    result += '<br />myFunc(100) = ' + myFunc(100);
    //
    // Let statement for block scope
    //
    let z = -1;
    result += "<br />Looping through values of z: ";
    for (let z=1; z<10; z++) {
        result += z.toString() + " * ";
    }
    if (z === -1) {
        result += "<br />After the loop z is still " + z.toString(); // -1
    }
    //
    // Exponents - so new it's not in ES6 yet
    //
    var exp1 = 2 ** 3;
    result += '<br />exp1=' + exp1;
    var exp2 = 5;
    exp2 **= 3;
    result += '<br />exp2=' + exp2;

    // Display results
    document.getElementById('output').innerHTML = 
        result;
})();