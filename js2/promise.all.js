// Create three promises that resolve after different times
const Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise resolved after one second');
    }, 1000);
});

const Promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second promise resolved after two seconds');
    },2000);
});

const Promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third promise resolved after 3 seconds');
    },3000);
});

// Use promise.all to run the promises in parallel
Promise.all([Promise1, Promise2, Promise3])
    .then((messages) => {
        console.log('All promises resolved:');
        messages.forEach((message, index) => {
            console.log(`Promise ${index + 1}: ${message}`);
        });
    })
    .catch((error) => {
        console.log('One of the promises rejected:', error);
    });