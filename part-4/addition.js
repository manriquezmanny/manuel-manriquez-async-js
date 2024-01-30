// Making worker add 2 numbers and post the solution back to main thread.
self.onmessage = (msg) => {
    const [num1, num2] = msg;
    self.postMessage(num1 + num2);
}