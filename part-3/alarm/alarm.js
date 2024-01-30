// Getting DOM elements
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");


// FUNCTION THAT SIMPLY USES setTimeout TO CREATE ALARM.
// SetTimeout takes a callback function and a value as parameters.
function setAlarm() {
    setTimeout(() => {
        output.textContent = "Wake up!"
    }, 1000);
}


// FUNCTION THAT USES PROMISE TO CREATE ALARM
// Creating the alarm function which returns a Promise. NOTE: the promise takes a single executor function. Note the exucutor function takes two functions as arguments
// NOTE: The functions that the executor takes are convensionally called the Resolve and Reject functions.
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    })
}


// USING async and await with the alarm() API.

// FIRST I would have to get the DOM elements from my HTML file. NOTE: I'm not actually using an html file for this practice example...
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const newBtn = document.querySelector("#set-alarm");
const newOutput = document.querySelector("#output");


// Creating the alarm function that uses async and await.
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0 ) {
            throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}

newBtn.addEventListener("click", async () => {
    try {
        const message = await alarm(name.value, delay.value);
        output.textContent = message;
    } catch (error) {
        output.textContent = `Couldn't set alarm: ${error}`;
    }
});


// An asynchronous function that would find the nth fibonacci number.
async function fibonacci(n) {
    let num1 = 0;
    let num2 = 1;
    let sum;

    // Looping until n
    for ( i = 0; i < n; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    // returning the nth number in sequence.
    return num2;
}

const fourteenthNum = await fibonacci(14);

// This console.log won't run until the fourteenth nubmer is found since await was used.
console.log(fourteenthNum);