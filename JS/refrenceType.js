// const _ = require('lodash')
console.log("Reference Type");

// object
let obj = {
  name: "Elon Musk",
  age: 39,
  ceo: "OpneAi",
  curr: "X, spaceX, chatGpt Owner",
  openAi: function openAi() {
    console.log("Currently working on Generative AI!");
  },
};

for (let key in obj) {
  console.log(key + " " + obj[key]);
}
// console.log(obj);

// obj.openAi();
// console.log(typeof obj);
// // shallow copy
// let obj1 = obj;
// console.log("Obj1: ", obj1);
// obj.name = "Mark Zuck";
// console.log("After changing name to obj & obj1:", obj, obj1);
// // Deep copy
// let obj2 = _.cloneDeep(obj);
// console.log("Obj2: ", obj2);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// // array constructor
// let brr = new Array(
//   1,
//   "Hello",
//   true,
//   0.987654,
//   null,
//   undefined,
//   { name: "Elon Musk" },
//   [1, 2, 3]
// );
// console.log(brr);
// console.log(typeof arr);
// console.log(typeof brr);

// // Array methods
// arr.push(6);
// arr.pop();
// arr.shift();
// arr.unshift("Love Babbar");
// arr.push(true);
// let ans = arr.slice(1, 5);
// console.log(arr, ans);
// arr.splice(0, 1, "Elon Musk");
// console.log(arr);

// let ar = [10, 20, 30, 40, 50, 66, 55, 32, 23, 53, 64, 67];
// ar.map((idx, num) => {
//   console.log(idx, ":", num);
// });
// let ans = ar.map((idx) => {
//   return idx ** 2;
// });

// console.log(ans);

// let ans1 = ar.filter((num) => {
//   return num % 2 == 0;
// });
// console.log(ans1);

// let arr1 = [1, 2, "Hello", "Elon", "Musk", true, null, undefined];

// let ans2 = arr1.filter((value) => {
//   return typeof value == "string";
// });

// console.log(ans2);

let arr2 = [10, 20, 30, 40, 50];
// let ans3 = arr2.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(ans3);

let arr3 = [3, 5, 2, 1, 6, 4, 7];
// arr3.sort();
// console.log(arr3);
// console.log(arr3.indexOf(1));

arr3.forEach((num, idx) => {
  console.log("Number: ", num, " idx: ", idx);
});

let fullName = "JavaScript";
for (let i of fullName) {
  console.log(i);
}

let getSum = (arr2) => {
  let sum = 0;
  arr2.forEach((val) => {
    sum += val;
  });
  return sum;
};

console.log(getSum(arr2));
