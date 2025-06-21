// let idFetch = document.getElementById("frsHead");
// console.log(idFetch);
// let classFetch = document.getElementsByClassName("txt");
// console.log(classFetch);
// let qs = document.querySelector("#fiPara");
// console.log(qs);
// let all = document.querySelectorAll(".textMaker");
// console.log(all);
// let btn = document.getElementById("btn");
// btn.innerHTML = "<b>Hello Jee click me</b>";
// console.log(btn.outerHTML);
// let elem = document.querySelector("#div");
// console.log(elem.textContent);
// console.log(elem.innerText);

// let heading = document.createElement("h2");
// console.log(heading);
// heading.textContent = "Hi, this is second heading!";
// elem.appendChild(heading);

// let sp = document.createElement("span");
// sp.textContent = "Hi, I'm at top!";
// console.log(sp);
// elem.insertAdjacentElement("beforebegin", sp);
// let ch = document.querySelector("#sPara");
// elem.removeChild(ch);

let sPara = document.getElementById("spara");
console.log(sPara.style);
sPara.style.backgroundColor = "red";
console.log(sPara.style.cssText);
sPara.style.cssText =
  "background-color: rgb(82, 255, 47); padding: 10px; margin: 2px; border: 5px dotted black; color: #fff";

let fElem = document.querySelector("#fdiv");
console.log(fElem);
fElem.setAttribute("class", "newClass");
let change = document.querySelector(".newClass");
change.style.cssText = "background-color: red";
console.log(fElem.className);
fElem.className = "firstClass secondClass";
console.log(fElem.className);
fElem.classList.add("hello");
fElem.classList.remove("secondClass");
console.log(
  fElem.classList.toggle("secondClass"),
  fElem.classList.contains("secondClass")
);
