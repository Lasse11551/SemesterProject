// asynchronous code:
// Browser event handlers, network calls, buffers / streams, 
// working with files / directories/ setTimeout / setInterval,
// databases

// Javascript one thread - the main thread

// Solution 1. Callbacks
// Problem: Callback hell/Pyramid of doom (mange callbacks inde i hinanden)

// Solution 2. Promises
// states:
// 1. pending
// 2. fulfilled
//     - resolved 
//     - rejected

// Solution 3. Async/Await
// syntactic sugar - Gør det samme som at bruge promise, det ser bare mere overskueligt ud

new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            //throw new Error("some error");
            resolve("Everything OK")
        } catch(error) {
            console.log(error)
            reject("Nothing OK")
        }
    }, 2000);
})
// .then((successMessage) => console.log(successMessage))
// .catch((errorMessage) => console.log(errorMessage));

// console.log("I'm walking here...");


/* 
Create a promisified function
that is, a function that returns a new promise
it should be called myPromise
and it should either resolve as "Something Good" or reject as "Something Bad"
create a 3 second timeout to simulate asynchronous behavior
*/

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
            resolve("Something good")
            } catch(error) {
                reject("Something bad")
            }
        }, 3000)
    })
}

// myPromise()
// .then((SuccesMessage) => console.log(SuccesMessage))
// .catch((ErrorMessage) => console.log(ErrorMessage)); 

/* assignment
    try to simulate the fetch function 
    call it myFetch 
    it should return the promise json() so that you can call response.json() on it
    as much as possible try to imagine how fetch works and simulate the underlying code
*/

function myFetch(URL, options={}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        try {
            resolve({ json: new Promise((resolve, reject) => resolve("Response from server"))})
        } catch {
            reject("Fetch failed")
        }
    }, 2000)
    })
}

// myFetch("https://www.domain.com")
// .then((response) => response.json)
// .then((result) => console.log(result))
// .catch((ErrorMessage) => console.log(ErrorMessage))

//IIFE
(async function main() {
    try {
        const myPromiseResult = await myPromise();
        console.log(myPromiseResult);
    } catch(error) {
        console.log(error)
     }
    
})()

// main();