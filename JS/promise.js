

let fPromise = new Promise((resolve, reject) => {
    function SayMyName() {
        console.log("My Name is DevX");
    }

    setTimeout(SayMyName, 0);
    resolve("Promise Resolved");
})
console.log(fPromise);

let sPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise Resolved!");
    } else {
        reject("Promise Rejected!");
    }
})

sPromise.then((msg) => {
    console.log("Current State is: " + msg);
    return "First Promise!";
}).then((msg) => {
    console.log("Current State is: " + msg);
    return "Second Promise!";
}).then((msg) => {
    console.log("Current State is: " + msg);
    return "Third Promise!";
}).then((msg) => {
    console.log("Current State is: " + msg);
}).catch((err) => {
    console.log("Error " + err);
}).finally((msg) => {
    console.log("I'll always run!");
})


let pr1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First Promise")
})
let pr2 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "Second Promise")
})
let pr3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Third Promise")
})

Promise.all([pr1, pr2, pr3]).then((values) => {
    console.log(values);
}).catch((error) => {
    console.log("Error: " + error);
})