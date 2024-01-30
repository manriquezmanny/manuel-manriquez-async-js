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