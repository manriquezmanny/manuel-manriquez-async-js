// Creating a Promise object.
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);


// FIRST EXAMPLE WITHOUT PROMISE CHAINING...
/*
// Using the then method to pass an event handler.
fetchPromise.then((response) => {
    const jsonPromise = response.json();
    // Using another event handler to run code if and when the json method succeeds.
    jsonPromise.then((data) => {
        console.log(data[0].name);
    });
}); */


// SECOND EXAMPLE USING PROMISE CHAINING. MUCH NEATER!
fetchPromise
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
        console.log(data);
    });