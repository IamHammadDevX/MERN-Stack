console.log("Operators & Conditions");
let num = 10;
let num1 = 20;
console.log(num + num1, num ** num1);
num1 = 10;
console.log(num === num1);
let x = 20;
let y = 30;
console.log(x !== y);

// ternary ops
let age = 29;
let status = age >= 18 ? "I can Vote!" : "I can't Vote";
console.log(status);

let st = (false && "hello");
let st1 = (true || "hello");
console.log(st, st1);

console.log(5<<4);
console.log(5<<1);
console.log(5>>4);

if (age >= 15) {
    console.log("You can drive");
}else{
    console.log("You can't drive");
}

let n = 2

switch (n) {
    case 1:
        console.log("A");
        break;
    case 2:
        console.log("B");
        break;
    case 3:
        console.log("C");
        break;
    default:
        console.log("Kch nahi chala!");
        break;
}
