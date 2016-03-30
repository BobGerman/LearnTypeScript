(() : void => {

    class Person {
        
        private firstName: string;
        private lastName: string;
        
        constructor (firstName: string, lastName:string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        public getName(): string;
        public getName(prefix: string) : string;
        public getName(num: number) : string;
        public getName(prefixOrNumber?: string | number) : string {
            
            let fullName = this.firstName + " " + this.lastName;
            
            if (prefixOrNumber && typeof prefixOrNumber === "string") {
                return prefixOrNumber + " " + fullName;                    
            } else if (prefixOrNumber && typeof prefixOrNumber === "number") {
                return prefixOrNumber.toString() + ". " + fullName;
            } else {
                return fullName;
            }
        }
        
    }

    var me: Person = new Person("Bob", "German");

    var result = me.getName() + "<br />" +
                 me.getName("Mr.") + "<br />" +
                 me.getName(1);

    document.getElementById('output').innerHTML = result;

    
})();
    