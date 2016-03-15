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

    class Geek extends Person {
        
        private favoriteDevLanguage: string;
        private favoriteSciFiMovie: string;
        
        constructor (firstName: string, lastName: string,
                     favoriteDevLanguage: string,
                     favoriteSciFiMovie: string)
                     {
                         super(firstName, lastName);
                         this.favoriteDevLanguage = favoriteDevLanguage;
                         this.favoriteSciFiMovie = favoriteSciFiMovie;
                     }
                     
        getMessage() {
            return super.getName() + " likes " + me.favoriteDevLanguage + " and " + me.favoriteSciFiMovie;
        }
                
    }

    var me: Geek = new Geek ("Bob", "German", "TypeScript", "Forbidden Planet");

    var result = me.getMessage() 

    document.getElementById('output').innerHTML = result;

    
})();
    