// Creating Promise Objects.
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
    );
const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
    );

// Using the all method to return an array of responses.
Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    // The then method is called if all promise objects are resolved.
    .then((responses) => {
        for (const response of responses) {
            console.log(`$${response.url}: ${response.status}`);
        }
    })
    // The error catched is the error from the first rejected Promise in the array of Promises.
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });