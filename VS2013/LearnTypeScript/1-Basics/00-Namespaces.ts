// namespace and module are the same thing
// use the export keyword to make something visible
// outside the namespace or module; otherwise
// it's hidden.

// Here is a simple namespace
namespace demo {
    var message = "Hello, world";
    export var result = message;
    console.log (result);
}

// Here is a Typescript IIFE:
((): void => {
    var result = "Goodbye";
    console.log (result);
})()

// Namespaces can be nested
module outer {
    export module inner {
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