(() : void => {

    // Quick review of the this keyword:
    //
    // 1 - If you use apply, bind, or call, you specify this
    // 2 - If you invoke the function in the form someObject.myFunc(),
    //     this is someObject
    // 3 - If in strict mode, this will be undefined
    // 4 - Otherwise this will be the global object
    
    class Person {
        
        private firstName: string;
        private lastName: string;
        
        constructor (firstName: string, lastName:string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        
        // Prototype method
        getName():string {
            return this.firstName + " " + this.lastName;
        }
        
        // Instance method
        getGreeting = ():string => {
            return "Hello " + this.firstName;
        }
    }

    var me: Person = new Person("Bob", "German");

    var result = 'Direct calls:<br />' +
                 me.getName() +
                 '<br />' +
                 me.getGreeting() +
                 '<br /><br />';
                 
    var getNamefunc = me.getName;
    var getGreetingFunc = me.getGreeting;
    
    result += 'Passed reference to the function (as in a callback):<br />' +
              getNamefunc() +    // this is global object 
              '<br />' +
              getGreetingFunc(); // this is instance

    document.getElementById('output').innerHTML = result;

    
})();
    