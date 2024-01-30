// Creating a new worker and giving it the code in the "generate.js" file.
const worker = new Worker("./generate.js");

// Getting the generate DOM button.
const btn = document.querySelector("#generate");

// Giving the button an event listener.
btn.addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    worker.postMessage({
        command: "generate", 
        quota,
    });
});

// Adding an event listener that will run a block of code when the worker returns a message back to main thread.
worker.addEventListener("message", (message) => {
    document.querySelector("#output").textContent =
    `Finished generating ${message.data} primes!`;
});

document.querySelecctor("#reload").addEventListener("click", () => {
    document.querySelector("#user-input").value =
    `Try typing in here immediately after pressing "Generate primes"`;
    document.location.reload();
})


// Practicing creating a worker.
const additionWorker = new Worker("addition.js");

additionWorker.postMessage([4, 5]);

additionWorker.addEventListener("message", (message) => {
    console.log(`The solution is: ${message}`)
})