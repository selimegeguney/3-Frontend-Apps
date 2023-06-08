//? ------- SELECTORS --------
const keyboard = document.getElementById("keyboard");
const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");
const answer5 = document.getElementById("answer-5");

//? ------- VARIABLES --------
let word = "SELIM";
let answerArr = [answer1, answer2, answer3, answer4, answer5];
let theWord = 0;
let createdWord = "";
//? ------- EVENTS --------
keyboard.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("key") &&
    e.target.id != ("enter" || "delete")
  ) {
    const answer = answerArr[theWord];
    let checkSpan = answer.firstElementChild.firstElementChild;
    writeTheLetter(e.target.id, answer);
  } else if (e.target.id === "enter") {
    checkTheWord();
  }
});

//? ------- FUNCTIONS --------
const writeTheLetter = (letter, answer) => {
  if (createdWord.length < 5) {
    for (let child of answer.children) {
      if (child.firstElementChild.textContent === "") {
        child.firstElementChild.textContent = letter;
        break;
      }
    }
    createdWord += letter;
  }
  //   else {
  //     theWord++;
  //     answer = answerArr[theWord];
  //     createdWord = "";
  //     writeTheLetter(letter, answer);
  //   }
};
const checkTheWord = () => {
  if (createdWord.length !== 5) {
    alert("5 Letters Needed");
  } else if (createdWord === word.toUpperCase) {
    alert("Congrats");
  } else {
    alert("Wrong");
    theWord++;
    createdWord = "";
  }
};
