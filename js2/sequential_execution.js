//Function that returns a promise that resolves after a given time
function delayPromise(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

//Execute promises sequentially
function executeSequentially(){
    return delayPromise('First promise resolved', 1000)
        .then((result) => {
            console.log(result);
            return delayPromise('Second promise resolved', 2000);
    })
    .then((result) => {
        console.log(result);
        return delayPromise('Third promise resolved', 3000);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

//Run the sequentially execution function
executeSequentially();