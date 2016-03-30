(() : void => {

    class Person {
        
        private firstName: string;
        private lastName: string;
        static species: string = "homo sapiens";
        
        constructor (firstName: string, lastName:string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        
        public getName = ():string => {
            return this.firstName + this.lastName;
        }
        
        static getNameAndSpecies = (someone: Person) : string => {
            return someone.getName() + " is of species " + Person.species;
        }
    }

    var me: Person = new Person("Bob", "German");

    var result = Person.getNameAndSpecies(me);

    document.getElementById('output').innerHTML = result;

    
})();
    