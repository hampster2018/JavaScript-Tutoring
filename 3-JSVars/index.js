// Declaring Variables
// Array type are dynamic meaning you can change their type after instantiation

// 3 basics ways a javascript variable can be declared

var var1 = "Hello";
let var2 = "Hello again"; // This is generally accepted as the best way unless you need const
const var3 = "Hello Final";

// 5 basics primitive types in Javascript

let firstName = 'Yeric'; // Basic String
let age = 30; // No difference between ints and doubles 
let isApproved = true; // Boolean
let random = undefined; // defined as undefined
let selectedColor = null; // Defined as an object

// 3 type of reference types

// Object type 
let person = {
    name: firstName,
    age: age,
};

// Can access using the . attribute
console.log(person.name)

// Can also use brackets
// Better to use this whenever we don't know what types of variables we will find such as http request
console.log(person['name'])

// Array Type

selectedColor = ['red', 'blue'];
console.log(selectedColor[0]);

// Can add items dynamically

selectedColor[2] = 'green';
console.log(selectedColor.length)


// Functions

function greet(name, lastName) {
    console.log('Hello World' + ' ' + name + ' ' + lastName);
}

greet(firstName, 'Billy');
greet(firstName);

function square(number) {
    return number * number;
}

let squared = square(2);
console.log(squared);