
const destinyBtn = document.querySelector('.destiny');

const tryAgainBtn = document.querySelector('.try-again');

let userAnswer = document.querySelector('.userInput');

let howOld = document.querySelector('.how-old');

let userAge = "";

const humanLifespan = 79;

let currentYear = 2021;

const positiveMsg = document.querySelector('.positive-message');
const negativeMsg = document.querySelector('.negative-message');

destinyBtn.addEventListener('click', () => {
  userAge+= userAnswer.value;

  if (humanLifespan - userAge + currentYear >= 2061){

    positiveMsg.style.display = "flex";
    tryAgainBtn.style.display = "inline";
    userAnswer.style.display = "none";
    howOld.style.display = "none";
    destinyBtn.style.display = "none";
  } else {
    userAnswer.style.display = "none";
    howOld.style.display = "none";
    destinyBtn.style.display = "none";
    negativeMsg.style.display = "flex";
    tryAgainBtn.style.display = "inline";
  }

})

tryAgainBtn.addEventListener('click', () => {
  tryAgainBtn.style.display = "none";
  positiveMsg.style.display = "none";
  negativeMsg.style.display = "none";
  userAnswer.style.display = "inline";
  howOld.style.display = "inline";
  destinyBtn.style.display = "inline";
  userAge = '';
  userAnswer.value = '';



})
