// ASYNCHRONOUS PROGRAMMING USING EVENT HANDLERS.

// Getting the pre html element.
const log = document.querySelector(".event-log");

// Click event listener to start request.
document.querySelector("#xhr").addEventListener("click", () => {
    log.textContent = "";

    // Creating xhr object.
    const xhr = new XMLHttpRequest();

    // Event handler for when the request is done loading.
    xhr.addEventListener("loadend", () => {
        log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
    });

    // Initializing HTTP GET request using xhr object.
    xhr.open("GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
    );
    // Sending HTTP GET request.
    xhr.send();
    log.textContent = `${log.textContent}Started XHR request\n`;
});

// Click event listener to reload page.
document.querySelector("#reload").addEventListener("click", () => {
    log.textContent = "";
    document.location.reload();
})