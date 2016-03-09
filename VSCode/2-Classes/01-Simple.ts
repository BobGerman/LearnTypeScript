(() : void => {

    class Person {
        
        private firstName: string;
        private lastName: string;
        
        constructor (firstName: string, lastName:string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        
        getName() {
            return this.firstName + " " + this.lastName;
        }
    }

    var me: Person = new Person("Bob", "German");

    var result = me.getName();

    document.getElementById('output').innerHTML = result;

    
})();
    