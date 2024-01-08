// Creating a Promise object.
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

// Console logging the Promise object... should show it's status.
console.log(fetchPromise);

// Passing a handler function to the object's then method. Should run handler function if and when response recieved.
fetchPromise.then((response) => {
    console.log(`Recieved response: ${response.status}`);
});

// This should log before response is recieved since the program is asynchronous.
console.log("Started request...");