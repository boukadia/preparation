"use strict";
let guessNumber = Math.floor(Math.random() * 20) + 1;
let etat = document.querySelector(".etat");
let checkedNumber = document.getElementById("checkedNumber");
let correcteNumber = document.querySelector(".guessNumber");
let score = document.querySelector(".score");
let again = document.querySelector(".again");
let hightScore = document.querySelector(".hightScore");
let body = document.querySelector(".body");
let header = document.querySelector(".header");
let count = 0;
let scor = 20;
console.log(etat.textContent);

let btn = document.getElementsByTagName("button")[0];
btn.onclick = function () {
  // if(count>=3){
  //     scor=20;
  //     count=0;
  //     again.textContent="youlose"
  // }
  // else{
  //     again.textContent="again!"
  // }

  if (checkedNumber.value == guessNumber) {
    correcteNumber.textContent = guessNumber;
    etat.textContent = "bien!";

    again.textContent = "wins!!";

    header.style.backgroundColor = "green";
    body.style.backgroundColor = "green";
    document.body.style.backgroundColor = "white";
  } else if (checkedNumber.value > guessNumber) {
    etat.textContent = "plus grand!";
  } else {
    etat.textContent = "plus moin!";
  }
  score.textContent = scor;
  scor--;
  count++;
  console.log(count);
};
