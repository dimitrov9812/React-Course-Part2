// resolve is for response for running well -> reject is for an error
// we can resolve only one time and only one thing

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        
        resolve({
            name:'Alex',
            age:33
        })
        
        reject('Something went wrong')
    }, 5000);
});

console.log('before');

// if the answer is resolve we can work with the data we got
promise.then((data) => {
    console.log(data);

    return "passing data down"
}).then((str) => {
    console.log('is it working' + str);
}).catch((error) => {
    console.log('error: ',error)
});


console.log('after');