// Create three promises with different resolve and reject times
const promiseA = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Promise A rejected");
    }, 1000);
});

const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise B resolved");
    }, 2000);
});

const promiseC =new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise C resolved");
    }, 3000);
});

Promise.any([promiseA, promiseB, promiseC])
    .then((message) => {
        console.log("First fulfilled promise:", message);
    })
    .catch((error) => {
        console.log("All promises were rejected:", error);
    });