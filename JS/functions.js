console.log("Plain & Arrow functions");

function printCount() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

printCount();

function findAvg(x, y) {
  let avg = (x + y) / 2;
  console.log("Average is:", avg);
}

findAvg(34, 90);

function ret(a, b, c) {
  let sum = a + b + c;
  return sum;
}

let ans = ret(2, 45, 67);
console.log(ans);

function getData(firsName, lastName, age, gender, dept) {
  let str = `${firsName} ${lastName} is ${age} years old ${gender}, and studying in the dept of ${dept}`;
  return str;
}

let get = getData("Love", "Babbar", "29", "Male", "CSE of NSIT");
console.log(get);

let findSquare = function (num1) {
  let sqr = num1 ** 2;
  return sqr;
};

let ans1 = findSquare(8);
console.log(ans1);

// function getExpo(x, y) {
//   let ans = x ** y;
//   return ans;
// }

// variable function
// const getExpo = function (x, y) {
//   let ans = x ** y;
//   return ans;
// };

// Arrow function
const getExpo = (x, y) => {
  let ans = x ** y;
  return ans;
};
console.log(getExpo(3, 6));
