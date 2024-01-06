// LONG RUNNING SYNCHRONOUS PROGRAM THAT FREEZES UP FOR A WHILE.

const MAX_PRIME  = 1000000;

// function to check if number is prime.
function isPrime(n) {
    for (let i = 2; i <=Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

// Arrow function that generates random nubmer with a set max possible number passed into it.
const random = (max) => Math.floor(Math.random() * max);

// function to generate an array of prime numbers of size quota.
function generatePrimes(quota) {
    const primes = [];
    while (primes.length < quota) {
        const candidate = random(MAX_PRIME);
        if (isPrime(candidate)) {
            primes.push(candidate);
            console.log(`${candidate} added to primes array`);
        }
    }
    return primes;
}

// Getting html elements using querySelector
const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

// Adding a click Event Listener to the generate primes button that will generate primes.
document.querySelector("#generate").addEventListener("click", () =>{
    const primes = generatePrimes(quota.value);
    output.textContent = `Finished generating ${quota.value} primes!`;
});

// Adding a click Event Listener to the reload button that will reload the page.
document.querySelector("#reload").addEventListener("click", () => {
    // reloading the page like a refresh button.
    document.location.reload();
})