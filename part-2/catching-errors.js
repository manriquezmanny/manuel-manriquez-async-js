// Creating a Promise object with URL that will cause error.
const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );

// Promise chain with catch at the end to handle all possible errors.
fetchPromise
    .then((response) => {
        if (!Promise.ok) {
            throw new Error(`HTTOP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error) => {
        console.error(`Could not get products: ${error}`);
    });