// const _ = require('lodash')
console.log("Reference Type");

// object
// let obj = {
//   name: "Elon Musk",
//   age: 39,
//   ceo: "OpneAi",
//   curr: "X, spaceX, chatGpt Owner",
//   openAi: function openAi() {
//     console.log("Currently working on Generative AI!");
//   },
// };
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

let arr = [1,2,3];
console.log(arr);
// array constructor
let brr = new Array(1,"Hello", true, 0.987654, null, undefined, {name: "Elon Musk"}, [1,2,3]);
console.log(brr);
console.log(typeof(arr));
console.log(typeof(brr));
