let t1 = performance.now();
for (let i = 0; i < 100; i++) {
    let paras = document.createElement("p");
    paras.textContent = "This is a performance check paragraph number " + i;
    document.body.appendChild(paras);
}
let t2 = performance.now();
console.log("Time taken to create and append 100 paragraphs: " + (t2 - t1) + " milliseconds");


let t3 = performance.now();
let myDiv = document.createElement("div");
for (let i = 0; i < 100; i++) {
    let paras = document.createElement("p");
    paras.textContent = "This is a performance check paragraph number " + i;
    myDiv.appendChild(paras);
}
document.body.appendChild(myDiv);
let t4 = performance.now();
console.log("Time taken to create and append 100 paragraphs to a specific div: " + (t4 - t3) + " milliseconds");

// best code
// Document fregment
let fregment = document.createDocumentFragment();
let t5 = performance.now();
for (let i = 0; i < 100; i++) {
    let paras = document.createElement("p");
    paras.textContent = "This is a performance check paragraph number " + i;
    // no reflow and repaint
    fregment.appendChild(paras);
}
document.body.appendChild(fregment);
let t6 = performance.now();
console.log("Time taken to create and append 100 paragraphs using Document Fragment: " + (t6 - t5) + " milliseconds");