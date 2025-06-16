let objSrc = {
  name: "Elon",
  comp: "OpenAi",
  desig: "CEO",
  model: "GPT 4.o mini",
  expense: 8787667,
};

// Spread Operator ...
// let objDest = { ...objSrc };
// objSrc.comp = "Space Station";
// objDest.comp = "Meta";
// objDest.name = "Mark";
// objDest.model = "LIAMA";

// assign method
// let objDest = Object.assign({}, objSrc);
// objSrc.comp = "Space Station";
// objDest.comp = "Meta";
// objDest.name = "Mark";
// objDest.model = "LIAMA";

// console.log("Object Src: ", objSrc);
// console.log("Object Dest: ", objDest);

let objDest = {};

for (let key in objSrc) {
  let newKey = key;
  let newVal = objSrc[key];

  objDest[newKey] = newVal;
}
objSrc.comp = "Space Station";
objDest.comp = "Meta";
objDest.name = "Mark";
objDest.model = "LIAMA";
console.log("Object Src: ", objSrc);
console.log("Object Dest: ", objDest);
