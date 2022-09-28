const scoreValueEl = document.querySelector(".score--value");
const imgRockEl = document.querySelector(".img--rock");
const imgPaperEl = document.querySelector(".img--paper");
const imgScissorsEl = document.querySelector(".img--scissors");

const section1El = document.querySelector(".section--1");
const section2El = document.querySelector(".section--2");

const imgPlayer0 = document.querySelector(".position--0");
const imgPlayer1 = document.querySelector(".position--1");

const winLoseDisplayEl = document.querySelector(".win--lose--display");

const playAgainEl = document.querySelector(".btn--playAgain");

const btnRulesEl = document.querySelector(".btn-rules");
const btnCloseModel = document.querySelector(".close-modal");

let pickedValue = -1;
let computerValue = -1;
let score = 0;
let options = ["rock", "paper", "scissors"];
let p1 = document.querySelector(".player--massege1").textContent;
let p2 = document.querySelector(".player--massege2").textContent;

const getRendomNumber = () => Math.floor(Math.random() * 3);

const winLogic = function (arg1, arg2) {
  if (
    (arg1 === "rock" && arg2 === "paper") ||
    (arg2 === "rock" && arg1 === "paper")
  ) {
    return "paper";
  } else if (
    (arg1 === "paper" && arg2 === "scissors") ||
    (arg2 === "paper" && arg1 === "scissors")
  ) {
    return "scissors";
  } else if (
    (arg1 === "rock" && arg2 === "scissors") ||
    (arg2 === "rock" && arg1 === "scissors")
  ) {
    return "rock";
  }
};

const selectedValuePrint = function () {
  document.querySelector(".player--massege1").textContent =
    p1 + options[pickedValue];
  document.querySelector(".player--massege2").textContent =
    p2 + options[computerValue];
};

const solveLogic = function () {
  computerValue = getRendomNumber();
  if (options[pickedValue] === options[computerValue]) {
    winLoseDisplayEl.textContent = "game tie";
  } else {
    let win = winLogic(options[pickedValue], options[computerValue]);
    if (options[pickedValue] === win) {
      //you win
      winLoseDisplayEl.textContent = "you win";
      score++;
      scoreValueEl.textContent = String(score);
    } else {
      //you lose
      winLoseDisplayEl.textContent = "you lose";
      //score--; only if socore > 0 ;

      if (score > 0) {
        score--;
        scoreValueEl.textContent = String(score);
      }
    }
  }
  selectedValuePrint();
  // img of picking
  imgPlayer0.src = `./images/icon-${options[pickedValue]}.svg`;
  imgPlayer0.classList.remove("color--rock");
  imgPlayer0.classList.add(`color--${options[pickedValue]}`);
  imgPlayer1.src = `./images/icon-${options[computerValue]}.svg`;
  imgPlayer1.classList.remove("color--paper");
  imgPlayer1.classList.add(`color--${options[computerValue]}`);
};

imgRockEl.addEventListener("click", function () {
  pickedValue = 0;
  section1El.classList.add("display-none");
  section2El.classList.remove("display-none");
  solveLogic();
});
imgPaperEl.addEventListener("click", function () {
  pickedValue = 1;
  section1El.classList.add("display-none");
  section2El.classList.remove("display-none");
  solveLogic();
});
imgScissorsEl.addEventListener("click", function () {
  pickedValue = 2;
  section1El.classList.add("display-none");
  section2El.classList.remove("display-none");
  solveLogic();
});

playAgainEl.addEventListener("click", function () {
  section1El.classList.remove("display-none");
  section2El.classList.add("display-none");

  imgPlayer0.classList.remove(`color--${options[pickedValue]}`);
  imgPlayer0.classList.add("color--rock");

  imgPlayer1.classList.remove(`color--${options[computerValue]}`);
  imgPlayer1.classList.add("color--paper");

  pickedValue = -1;
  computerValue = -1;
});

btnRulesEl.addEventListener("click", function () {
  document.querySelector(".model").classList.remove("display-none");
});

btnCloseModel.addEventListener("click", function () {
  document.querySelector(".model").classList.add("display-none");
});
