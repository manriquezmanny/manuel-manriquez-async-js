// BASIC SYNCHRONOUS PROGRAMMING WITH NO HTML.

// Basic synchronous program that logs greeting.
const firstName = "Manny";
const firstGreeting = `Hello, my name is ${name}!`;
console.log(firstGreeting);

// Basic synchronous program that logs greeting using function.
function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
}

const secondName = "Manny";
const secondGreeting = makeGreeting(secondName);
console.log(secondGreeting);