console.log("Hoisting");

console.log(age);
var age = 28;

printName("Love Babbar");

function printName(name) {
  console.log(name);
}

// call stack
console.log("function call stack");

function greetMe(greet, fullName) {
  console.log("Hello", fullName);
  greet();
}

function greet() {
  console.log("Hello, Ji kaise hain ap!");
}

greetMe(greet, "Elon Musk");

function sqrt(num) {
  return function (num) {
    return num ** num;
  };
}
let anotherFunc = sqrt(5);
console.log(anotherFunc(10));

let arr = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
  function (a, b) {
    return a * b;
  },
  function (a, b) {
    return a % b;
  },
];

let ans = arr[0];
console.log(ans(5, 10));
