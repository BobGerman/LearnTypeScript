((): void => {

    // * String *
    var result: string = '<u>Results</u><br />';

    // * String literal *
    var greeting: 'Hello';
    //greeting = 'Goodbye';     // COMPILER ERROR!
    result += '<br />Greeting is '+ greeting;

    // * Number *
    var myNum : number = 123;
    result +=  '<br />Number: ' + myNum.toString();

    // * Boolean *
    var myBool : boolean = true;
    result +=  '<br />Boolean: ' + myBool.toString();

    // * Javascript built-in objects *
    var myDate: Date = new Date;
    result +=  '<br />Date: ' + myDate.toString();

    // * Browser objects *
    var myElement: HTMLElement
        = document.getElementsByTagName('body')[0];
    result +=  '<br />HTML Element: ' + myElement.tagName;

    // * Functions *
    var myFunc : (x:number) => number =
        function(x:number) : number {
            return x+1;
        }
    result += '<br />myFunc(41) = ' + myFunc(41);

    // * Complex types *
    var myPeople: {firstName: string, lastName: string}[] =
            [
                { firstName: "Bob", lastName: "German" },
                { firstName: "Bob", lastName: "Goodearl" }
            ]
    result += '<br /><br />My People: <ul>';
    myPeople.forEach(person => {
        result += '<li>' + 
            person.firstName + ' ' + person.lastName +
            '</li>';
    });
    result += '</ul>';

    // * Any *
    var myAny : any = "Hello";
    myAny = 3;
    result += '<br />Any: ' + myAny;

    // * Casting *
    var myPi: any = Math.PI;
    //var myIrrationalNumber: number = myPi;    // COMPILER ERROR!
    var myIrrationalNumber: number = <number> myPi;
    result += '<br />myPi = ' + myPi;

    // * Inferred type *
    var something = "My String";
    //something = 42;       // COMPILER ERROR!

    // * Inferred from logic ("type guard") *
    var t:any = 3;
    if (typeof t === 'number') {
        //t.substr(1);      // COMPILER ERROR!
        t = 4;
    }
    result += '<br />t=' + t;

    // * Union Types *
    var couldBe1: string | [string] = "Hello";
    var couldBe2: string | [string] = ["a","b"];
    result += "couldBe1 is a " + typeof couldBe1 + "<br />";
    result += "couldBe2 is a " + typeof couldBe2 + "<br />";


    document.getElementById('output')
        .innerHTML = result;
})();