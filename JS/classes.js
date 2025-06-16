class openAi {
  // props
  ceo = "Elon musk";
  developer = "Sam Altman";
  project = "GPT 4.1";
  #expense = 4000002; //private member
  company = "Open-Ai";

  // constructor
  constructor(newCeo, newDeveloper, newProject, newExp, newCom) {
    this.ceo = newCeo;
    this.developer = newDeveloper;
    this.project = newProject;
    this.#expense = newExp;
    this.company = newCom;
  }

  // behaviors
  chat() {
    console.log("Input / Prompt here to chat...");
  }
  response() {
    console.log(
      "I'm a AI model so i'm here to help you!, so how i can?",
      this.#expense
    );
  }
  call() {
    console.log("Listen and Response based on query");
  }
  imgGen() {
    console.log("It can generate images!");
  }
  get fetchExpense() {
    return this.#expense;
  }
  set modifyExpense(val) {
    this.#expense = val;
  }
}

let obj = new openAi("Andrej Karpathy", "Mustafa", "GPT4.3 mini", 908786, "X");
// for (let i in obj) {
//   console.log(i + " " + obj[i]);
// }
// console.log(obj.#expense);
// obj.chat();
// obj.response();
// obj.modifyExpense = 4059;
// let ans = obj.fetchExpense;
// console.log(ans);

function getAge() {
  return 78;
}

function sayName(name = "Jon", lname = name.toUpperCase(), age = getAge()) {
  console.log(name + " " + lname + " age is: " + age);
}

sayName("bell");

let curr = new Date(2003, 6, 18, 7);
console.log(curr.getDay());
