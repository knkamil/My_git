//Function that returns a promise that resolves after a given time
function delayPromise(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

//Async function to handle promises using async/await
async function executeAsync() {
    try {
        const result1 = await delayPromise('First promise resolved', 1000);
        console.log(result1);

        const result2 = await delayPromise('Second promise resolved', 2000);
        console.log(result2);

        const result3 = await delayPromise('Third promise resolved', 1000);
        console.log(result3);
    } catch (error) {
        console.error('Error:', error);
    }
}

//Run the async function
executeAsync();