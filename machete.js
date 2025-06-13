// To run this file, make sure you're in the directory containing this file
// and then run the command 'node ./machete.js'

// 'let' is a keyword used to create a variable. It's only used the first time you create a variable,
// after that you can simply use/reassign it
// 'const' is also a keyword to create a variable, but these variables cannot be reassigned/modified
// If you don't use either 'let' or 'const' to define your variable, it will be considered in the global scope
// While this isn't an issue now, we'll see the importance of using them appropriately later

// Reassigning a let variable is fine
let name = 'steffif'
console.log(name)
name = 'saanti'
console.log(name)

// You can also concatenate strings like this
const concatenatedStrings = name + " and Steffita"
console.log("This is a concatenated string: ", concatenatedStrings)

// Reassigning a const will give you an error (uncomment lines 13 and 14 to see the error when running the JS file)
const age = 26
console.log(age)
//age = 35
//console.log(age)

// You can add numbers
console.log('Added numbers: ', age + age)

// Boolean example
const isBoolean = true
console.log('The isBoolean variable is: ', isBoolean)

// Number example
const isNumber = 123
console.log('The isNumber variable is: ', isNumber)

// Float example
const isFloat = 123.123
console.log('The isFloat variable is: ', isFloat)

// Array example
const isArray = ['Hello', 123, false]
console.log('The isArray variable is: ', isArray)

// Object example
const isObject = {
    name: 'Object X',
    x: 50,
    y: 50
}
console.log('The isObject variable is: ', isObject)

// Nested object example with arrays and different data types
const user = {
    name: 'santi', 
    age: 26,
    friends: [
        {
            name: 'Sebita',
            age: 27,
            occupation: 'Programmer'
        },
        {
            name: 'Carlos',
            age: 25,
            occupation: 'Remax Agent'
        }
    ],
    wife: {
        name: "Steffitaa",
        age: 36,
        occupation: "Currently tech writer"
    },
}
console.log('Accessing nested object property: ', user.friends[0].name)