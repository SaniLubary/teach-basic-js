// JavaScript Objects Practice Exercise
// Instructions: Complete each exercise by writing your code below each comment
// Run this file using: node o1.js

// Exercise 1: Create a simple object
// Create an object called 'person' with properties: name, age, and occupation
// Then log the entire object to the console

// Your code here:
const person = {
    name: 'John Doe',
    age: 25,
    occupation: 'Developer'
};
console.log('Exercise 1:', person);

// Exercise 2: Accessing object properties
// Using the person object from Exercise 1, log each property individually
// Try using both dot notation and bracket notation

// Your code here:
console.log('Exercise 2 - Dot notation:', person.name);
console.log('Exercise 2 - Bracket notation:', person['age']);

// Exercise 3: Modifying object properties
// Add a new property 'hobbies' to the person object
// Update the age property
// Log the modified object

// Your code here:
person.hobbies = ['reading', 'coding'];
person.age = 26;
console.log('Exercise 3:', person);

// Exercise 4: Nested objects
// Create an object called 'student' with the following structure:
// - name
// - grades (object with subject names as keys and scores as values)
// - address (object with street, city, and zipCode)
// Log the student's name and their math grade

// Your code here:

// Exercise 5: Object methods
// Add a method to the student object that calculates their average grade
// The method should return the average of all grades
// Call the method and log the result

// Example:
student.exampleMeth0d = function() {
    // do something
    // return something
};
console.log('Exercise 5:', student.exampleMeth0d());

// Exercise 6: Object iteration
// Create an object called 'inventory' with at least 3 items
// Each item should have a name, price, and quantity
// Use Object.keys() to log all item names
// Use Object.values() to log all prices
// Use Object.entries() to log all items with their details

// Your code here:

// Exercise 7: Object destructuring
// Create an object called 'car' with properties: make, model, year, and color
// Use destructuring to extract make and model into separate variables
// Log these variables

// Your code here:

// Exercise 8: Object spread operator
// Create two objects: user and userDetails
// Use the spread operator to combine them into a new object
// Log the combined object

// Your code here:

// Bonus Challenge:
// Create a function that takes an object and returns a new object
// with all the values converted to strings
// Test it with different types of values (numbers, booleans, etc.)

// Your code here:
