//Create a promise that simulates an error
const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('An error ocurred');
    }, 1000);
});

//Handle the error  using .catch() method
errorPromise
    .then((message) => {
        console.log(message); //This won't be executed
    })

    .catch((error) => { 
        console.log('Error caught:', error); //Log the error message
    });

