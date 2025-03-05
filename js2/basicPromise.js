//Create a new promise
const myPromise = new Promise((resolve, reject) =>{
    //Simulate an asynchronous operation using setTimeout
    setTimeout(()=>{
        resolve('Promise resolved after 2 seconds');
    }, 2000);
});

//Consume the promise using .then() method
myPromise.then((message) => {
    console.log(message);
});