// namespace and module are the same thing
// use the export keyword to make something visible
// outside the namespace or module; otherwise
// it's hidden.

// * Simple namespace *
namespace demo {
    var message = "Hello, world";
    export var result = message;
    console.log (result);
}

// * Immediately Invoked Function Expression (IIFE) *
((): void => {
    var result = "Goodbye";
    console.log (result);
})()

// * Modules and namespaces can be nested *
module outer {
    export module inner {       // Use export to make visible
        export function addExcitement (message) {
            return message + "!";
        }
    }
}

// Now access members of the namespaces
document.getElementById('output').innerHTML = 
    outer.inner.addExcitement (
        demo.result
    );