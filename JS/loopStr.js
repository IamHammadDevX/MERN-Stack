console.log("Loops & Strings");
// for (let i = 0; i < 10; i++) {
//   if (i == 0 || i == 1) {
//     console.log(`${i} time virat kohli`);
//   } else {
//     console.log(`${i} times virat kohli`);
//   }
// }

// let i = 0;
// while (i < 10) {
//   if (i == 0 || i == 1) {
//     console.log(`${i} time virat kohli`);
//   } else {
//     console.log(`${i} times virat kohli`);
//   }
//   i++;
// }
// do {
//   if (i == 0 || i == 1) {
//     console.log(`${i} time virat kohli`);
//   } else {
//     console.log(`${i} times virat kohli`);
//   }
//   i++;
// } while (i < 10);

// for (let i = 0; i < 6; i++) {
//   if (i == 3) break;
//   else console.log(i);
// }
// for (let i = 0; i < 6; i++) {
//   if (i == 3) continue;
//   else console.log(i);
// }

let str1 = "Love \"Babbar\"";
let str = 'Hello Jee to kese hain ap!?';
let str2 = `Hello, This is CodeHelp
Youtube Channel, and 
you are watching DSA Supreme 3.O from Love Babbar`;
console.log(str1, str, str2);

let len = "Hello World";
console.log(len.length, len.toUpperCase());


let cri = "England"
console.log(cri.substring(3, 6));

let wtc = "Aussies vs Proteas";
let words = wtc.split(" ");
console.log(words);

console.log(words.join(","));
