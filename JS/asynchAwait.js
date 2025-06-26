
console.log("Fetching Data...");


// async function getData() {
//     // fetch data -> async code
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     // parse the json obj -> async code
//     let data = (await response).json()
//     console.log(data);
// }

// getData()


// post Data at endPoint
// prepare header
const header = new Headers();
header.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "iamhammadDevx" }),
    headers: header
}

// post data
async function postData() {
    const resp = await fetch(url, options);
    let data = await resp.json();
    console.log("Post data response: ", data);
}
// get data
async function getData() {
    // fetch data -> async code
    let response = await fetch(url)
    // parse the json obj -> async code
    let data = await response.json()
    console.log(data);
}

async function dataProcessing() {
    await postData();
    await getData();
}

dataProcessing();