let fpara = document.getElementById("fpara");
let anchor = document.getElementById("fanchor");

function changeText(e) {
  console.log(e);

  fpara.textContent = "The text has been changed!";
}

fpara.addEventListener("click", changeText);

// fpara.removeEventListener("click", changeText);

function changeBehavior(event) {
  event.preventDefault();
  console.log(event);
  anchor.textContent = "Behavior Changed Bro!";
}

anchor.addEventListener("click", changeBehavior);

let paras = document.querySelectorAll("p");
console.log(paras);
function alertPara(event) {
  if (event.target.nodeName === "SPAN") {
    alert("You have clicked the para no. " + event.target.textContent);
  }
}
// for (let index = 0; index < paras.length; index++) {
//   const element = paras[index];
//   element.addEventListener("click", alertPara);
// }

let div = document.getElementById("wrapper");
div.addEventListener("click", alertPara);
