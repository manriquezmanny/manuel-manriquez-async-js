// Functions for doing steps.
function doStep1(init) {
    console.log("Adding 1");
    return init + 1;
}
function doStep2(init) {
    console.log("Adding 2");
    return init + 2;
}
function doStep3(init) {
    console.log("Adding 3");
    return init + 3;
}

// Function Puts the steps together and gives result.
function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
}

doOperation();