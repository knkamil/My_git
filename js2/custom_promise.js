//Custom implementation of a basic promise
class CustomPromise {
    constructor(executor) {
        this.state = 'pending'; //Initial state
        this.valule = undefined; //Value when resolved or rejected
        this.handlers = []; //Handlers  to process then/catch calls
    

        //Resolve function
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.handlers.forEach(this.handle);
            }
        };

        //Reject function
        const reject = (error) => {
            if ( this.state === 'pending') {
                this.state = 'rejected';
                this.value = value;
                this.handlers.forEach(this.handle);
            }
        };

        try{
            executor(resolve, reject); //Execute the executor function
        } catch (error) {
            reject(error); //If there's an error, reject the promise
    }
}

//Handle function to process handlers based on state
handle = (handler) => {
    if (this.state === 'fulfilled') {
        handler.onFulfilled(this.value);
    }else if (this.state === 'rejected') {
        handlers.onRejected(this.value);
    }
};

//Then settled to add handlers
then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
        this.handle({
            onFulfilled: (value) => {
                if (onFulfilled) {
                    try {
                        resolve(onFulfilled(value));
                    } catch (error) {
                        reject(error);
                    }
                }else {
                    resolve(value);
                }
            },
            onRejected: (error) => {
                if (onRejected) {
                    try {
                        resolve(onRejected(error));
                    } catch (error) {
                        reject(error);
                    }
                } else {
                    reject(error);
                }
            }
        });
    });
}

//Catch method to handle rejections
catch(onRejected) {
    return  this.then(null, onRejected);
    }
}

//Example usage of CustomPromise
const promise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('Custom promise resolved:');
    },1000);
});

promise
    .then((message) => {
        console.log(message);
        return 'Next step';
    })
    .then((message) => {
        console.log(message);
    })
    .catch((errorr) => {
        console.error('Error:', error);
    });

