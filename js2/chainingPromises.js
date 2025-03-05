// Create the first promise
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise resolved');
    }, 1000);
});

// Chain the second promise
const secondPromise = firstPromise.then((message) => {
    console.log(message); //Log the mesage from the first promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Second promise resolved');
        }, 1000);
    });
});

//Chain the third promise
secondPromise.then((message) => {
    console.log(message); //Log the message from the second promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Third promise resolved');
            },1000);
        });
    }).then((message) => {
        console.log(message); //Log the message from the third promise
});

