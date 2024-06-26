const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 is resolved");
})


const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Chai", email: "raj@example.com"})
    }, 1000);
})

PromiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: "Shivam", password: "1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally( () => console.log("The promise is either resolved or rejected"))




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: "Javascript", password: "1234"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.