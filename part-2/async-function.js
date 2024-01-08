// Using the async keyword to make an asynchronous function.
async function fetchProducts() {
    try {
        // Waits for fetch call to be settled because of await keyword.
        const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        // Waits for the response.json() call to be settled because of await keyword.
        const data = await response.json();
        console.log(data[0].name);
    } catch (error) {
        // Logs error if try block failed.
        console.error(`Could not get products: ${error}`);
    }
}

fetchProducts();