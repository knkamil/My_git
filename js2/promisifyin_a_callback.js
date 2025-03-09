//Example of a callback-based function
function getData(callback) {
    setTimeout(() => {
        callback(null, 'Data received');
    }, 1000);
}

//Promisify the callback-based function
function getDataPromise(){
    return new Promise((resolve, reject) => {
        getData((error, data) => {
            if (error) {
                reject(error);
            }else {
                    resolve(data);
                }

                });
        });
}

//Use the promisified function
getDataPromise()
    .then((data) => {
        console.log('Promise resolved with:', data);
    })
    .catch((error) => {
        console.error('Promise rejected with:', error);
    });