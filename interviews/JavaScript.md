# Javascript-Topics

### Primitive Types

In JavaScript, a primitive is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
All primitives are immutable, i.e., they cannot be altered.

Now one question prompted in my mind that we can change any variable's value then How it can be immutable? So Here is the answer: 
```
let name = "Champ Decay"
name = "Dhruvang Gajjar"
name[0] = "A" // This will not change variable name
```

When you change the value of any variable, you're reassigning the value of varible not altering/mutating it

### Event bubbling

The bubbling principle is simple. When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
In the event bubbling, The event is first captured and handled by the innermost element and then propagated to outer elements.

```
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

> For instance, a `focus` event does not bubble.

### Event Capturing

In the event capturing, The event is first captured by the outermost element and propagated to the inner elements.
> the capturing phase is rarely used. Normally it is invisible to us.
### Debounce and Throttle

The debounce() function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called. 

```
function debounce(fun, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fun.apply(this, args)
        }, timeout)
    }
}

elem.addEventListener('click', debounce(() => {
    console.log('Hello')
}))
```

The throttle() function is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately.

```
function throttle(fun, timeout = 300) {
    let timer
    return (...args) => {
        if (!timer) {
            timer = setTimeout(() => {
                fun.apply(this, args)
                timer = null
            }, timeout)
        }
    }
}

elem.addEventListener('click', throttle(() => {
    console.log('Hello')
}))
```

### Prototype and Prototype chaining
Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
Every object in JavaScript has a built-in property, which is called its **prototype**. The prototype is itself an object, so the prototype will have its own prototype, making what's called a **prototype chain**. The chain ends when we reach a prototype that has null for its own prototype.
It helps us to achieve the inheritance in JavaScript.

### Shadowing
A variable that is defined in a local scope, but is also defined in an outer scope, is called a **shadowing**.
A variable defined in an outer scope and shadowed by a variable with the same name in a local scope is called a **shadowing**.
```
let x = 1
{
    let x = 2
    console.log(x) // 2
}
console.log(x) // 1
```

### Temporal dead zone
A time period in which a variable is declared but not assigned a value is called **temporal dead zone**.

### Call by Value and Call by Reference

### Closure
A closure is a function that has access to the parent scope. 
```
function outer() {
    let x = 1
    function inner() {
        console.log(x)
    }
    return inner
}
outer()() // 1
```

### Bind, Call and Apply

**Bind** inherits the values of the current object and returns a new object with the values of the current object.

```
const Person = {
    firstname: 'Dhruvang',
    lastname: 'Gajjar',
    greet: function(){
        return `Hello, ${this.firstname} ${this.lastname}`
    }
}

const unBoundName = Person.greet;
const GreetPerson = unBoundName.bind(Person)
GreetPerson() // Hello, Dhruvang Gajjar
```

**Call** is used to invoke the function and pass the arguments.

```
const Person = {
    firstname: 'Dhruvang',
    lastname: 'Gajjar',
    greet: function(greeting){
        return `${greeting}, ${this.firstname} ${this.lastname} ${punctuation}`
    }
}
const GreetPerson = Person.greet.call(Person, 'Hello', '!')
GreetPerson // Hello, Dhruvang Gajjar !
```

**Apply** is used to invoke the function and pass the arguments as an array.

```
const Person = {
    firstname: 'Dhruvang',
    lastname: 'Gajjar',
    greet: function(greeting, punctuation){
        return `${greeting}, ${this.firstname} ${this.lastname} ${punctuation}`
    }
}
const GreetPerson = Person.greet.apply(Person, ['Hello', '!'])
GreetPerson // Hello, Dhruvang Gajjar !
```

### Method Overriding
JavaScript supports overriding not overloading. When you define multiple functions which has the same name, the last one defined will override all the previously defined ones and every time when you invoke a function, the last defined one will get executed.


### Constructor

The constructor method is a special method of a class for creating and initializing an object instance of that class.

A constructor enables you to provide any custom initialization that must be done before any other methods can be called.

If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty:
> constructor() {}

## OOP Concepts of JavaScript

### Class
`class` keyword is used to create a class in javascript
```
class Person {
    constructor(name){
        this.name = name
    }
}
```

### Object
An object in JavaScript can be created using multiple ways. Few of them are as follows: 
1. Use `new` keyword to create object from given class
`const person1 = new Person("champ")`
2. Anonymous objects can be created using pair of curly braces containing property name
and value pairs.
`const person1 = {name: champ}`


### Automatic Semicolon Insertion (ASI)

Unlike other C-like languages, JavaScript does not enforce the use of a semicolon at the end of a statement. Instead, the semicolon is optional, and the JavaScript interpreter will "intelligently" add them when it runs the code.

In JavaScript, a semicolon is automatically inserted when,
- two statements are separated by a line terminator
- two statements are separated by a closing brace ('}')
- a line terminator follows a break, continue, return, or throw.

| Entered code | "Understood" as | Corrected code | 
|--|--|--|
| return <br/> 2a + 1;|return; <br/> 2a + 1; | return 2a + 1; |
| i<br/>++; | i;<br/>++; | i++; |
