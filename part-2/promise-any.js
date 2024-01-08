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

// Using the any method to run callback if any one of the promises is fulfilled.
Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    // The response is from the first Promise object fulfilled.
    .then((response) => {
        console.log(`${response.url}; ${response.status}`);
    })
    // Catch method callback runs if none of the Promise objects are fulfilled.
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });