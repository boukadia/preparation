"use strict";
let current1 = document.querySelector(".current1");
let current1Converte = Number(current1.textContent);
let current2 = document.querySelector(".current2");
let current2Converte = Number(current2.textContent);
let newGame = document.querySelector(".newGame");
let btn = document.querySelector(".fa-solid");
let btnCondition = document.querySelector(".btnCondition");
let gameCondition = document.querySelector(".gameCondition");
let winner = document.querySelector(".winner");

let hold = document.querySelector(".hold");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");

let player = 1;

btnCondition.onclick = function () {
  gameCondition.classList.remove("hidden");
};
btn.onclick = function () {
  gameCondition.classList.toggle("hidden");
};

newGame.addEventListener("click", function () {
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  current2Converte = 0;
  current1Converte = 0;
  player = 1;
});
hold.onclick = function () {
  if (player == 1) {
    score1.textContent = current1.textContent;
    player = 2;
  } else {
    score2.textContent = current2.textContent;

    player = 1;
  }
};

let rollDice = document.querySelector(".rollDice");
rollDice.addEventListener("click", function () {
  let dice = document.querySelector("img");
  let guessNUmber = Math.floor(Math.random() * 6 + 1);
  let src = "./im" + guessNUmber + ".jpeg";
  dice.setAttribute("src", src);
  dice.setAttribute("value", guessNUmber);

  if (current1Converte >= 8) {
    score1.textContent = current1Converte;
    current1Converte = 0;
    current1.textContent = current1Converte;
    winner.textContent = "player 1 wins!!";
    play = 1;
    return;
  }

  if (current2Converte >= 8) {
    score2.textContent = current2Converte;
    current2Converte = 0;
    current2.textContent = current2Converte;
    winner.textContent = "player 2 wins!!"; //il faut ajouter un autre div por affichagage winners
    play = 1;
    return;
  }

  if (player == 1) {
    current1Converte += guessNUmber;
    if (guessNUmber == 1) {
      current1Converte = 0;
      score1.textContent = 0;
      player = 2;
    }
    current1.textContent = current1Converte;
    if (winner.textContent) {
      winner.textContent = "";
    }
  } else {
    current2Converte += guessNUmber;
    if (guessNUmber == 1) {
      current2Converte = 0;
      score2.textContent = 0;
      player = 1;
    }
    current2.textContent = current2Converte;
    if (winner.textContent) {
      winner.textContent = "";
    }
  }
});
