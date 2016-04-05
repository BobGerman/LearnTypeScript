# Learn TypeScript

Sometimes the best way to learn is by example. This repo is intended to help you learn
TypeScript through examples. It's intended to show language features, not best practices or
useful applications, and is most useful if you already know JavaScript. The scripts work
but don't do anything useful beyond demonstrating how the language works. The HTML pages
can be served from any web server, and are just there to run the scripts and display
some output.

(Here are slides)[http://www.slideshare.net/BobGerman/typescript-101-introduction]
from a presentation at Boston Code Camp 25 where this material was used. The slides attempt to
answer the question "Why Typescript", and include the steps to set up your TypeScript
development environment.

The code is delivered in two folders: VSCode for users of Visual Studio Code or other folder-based
code editors, and VS2013 for users of Visual Studio. The code is the same.

1. Basics
  * 00-Namespaces.ts - shows how to set up namespaces, modules, and IIFEs (immediately invoked function
  expressions) to protect the global namespace in TypeScript
  * 01-TypeAnnotations.ts - shows how to annotate JavaScript variables and functions with types, about inferred types,
  and how to use type casting
  * 02-Enumerations.ts - shows two kinds of enums available in TypeScript
  * 03-ES6Compatibility.ts - shows example of ES6 polyfills built into TypeScript

2. Classes
  * 01-Simple.ts - shows a simple class
  * 02-Inheritance.ts - shows inheritance and use of the super keyword to access the base class
  * 03-Statics.ts - shows static members in a class
  * 04-Methods.ts - shows the TypeScript function syntax and the difference between prototype methods and
  instance methods
  * 05-FunctionOverloading.ts - simple example of function overloading in TypeScript
  * 06-Interfaces - shows how to create an interface that can be implemented by one or more classes
  * 07-Generics - shows how to use generic classes that allow specifying other classes to act on in a type safe manner
  
3. ExternalLibs
  * 01-Simple.ts - shows how to access an existing JavaScript library, OldStuff.js, from TypeScript. Don't miss
  the file typings/oldStuff/oldStuff.ts, which contains the typescript definition that declares the interface
  to oldStuff.js from TypeScript
  
I hope this is helpful and welcome comments and contributions. Thanks!

- Bob German, BlueMetal
  
