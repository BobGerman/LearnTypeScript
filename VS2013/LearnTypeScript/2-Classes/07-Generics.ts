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

    class Collection<T> {
        
        private items : T[] = [];
        
        Add(item: T) {
            this.items.push(item);
        }
        
        Each(callback: (item: T) => void) : void {
            for (var i in this.items) {
                callback(this.items[i]);
            }
        }
    }
    
    var people = new Collection<Person>();
    people.Add(new Person ("Bob", "German"));
    people.Add(new Person ("Bob", "Goodearl")); 

    var result = "";
    people.Each((person: Person) => {
        result += person.getName() + "<br />";
    })

    document.getElementById('output').innerHTML = result;

    
})();
    